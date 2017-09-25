/*global jest, describe, it, test, jasmine, expect, console*/
/*eslint no-console: "off"*/
import "react-native";
import {ListView, Linking, Alert} from "react-native";
import React from "react";
import Index from "../index.android.js";
import App from "../common/components/App";
import BeforeLoadView from "../common/components/BeforeLoadView";
import PostView from "../common/components/PostView";
import PostsList from "../common/components/PostsList";
import FakeHref from "../common/components/FakeHref";
const {configureMock, makeArtificialErrorEvent} = Linking;

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
jest.useFakeTimers();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("Testing PostView", () => {
	const makeTestFunction = (expectedAlertStr, canOpenURL, errorHandling) => {
		return (done) => {
			configureMock(canOpenURL, errorHandling);
			console.warn({expectedAlertStr, canOpenURL, errorHandling});
			const highlight = domTree.getInstance().externalLink.highlight;
			highlight.props.onPress().then(() => {
				console.warn("butthurt1");
				if (expectedAlertStr) {
					expect(Alert.alert.mock.calls.length).toEqual(1);
					expect(Alert.alert.mock.calls[0]).toEqual([expectedAlertStr]);
				}
				else {
					expect(Alert.alert.mock.calls.length).toEqual(0);
				}
				done();
			});
		};
	};
	const selectedPost = {
		"cleanUrl":"http://www.businessinsider.com.au/elijah-wood-hollywood-pedophile-ring-2016-5?r=US&IR=T",
		"createdUTC":1487844877,"name":"t3_5vpnjl","author":"yeoldgolddigger",
		"title":"Elijah Wood says there's a secret paedophile ring in Hollywood and child actors are 'prey'",
		"score":4329
	};
	const onBackMockFunc = jest.fn();
	onBackMockFunc.mockImplementation(() => {});
	let domTree = null;

	beforeEach(() => {
		domTree = renderer.create(
			<PostView selectedPost={selectedPost} onBack={onBackMockFunc}/>
		);
	});

	test("General rendering", () => {
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test("Checking touchability of \"Back\" button", () => {
		const backButton = domTree.getInstance().backButton;
		expect(typeof backButton.props.onPress).toEqual("function");
		backButton.props.onPress();
		expect(onBackMockFunc).toBeCalled();
	});
	describe("Testing work of alerts", () => {
		beforeEach(() => {
			Alert.alert.mock.calls = [];
		});
		test("canOpenURL == false, error when handling",
			makeTestFunction("Cannot handle this URL", false, true));
		test("canOpenURL == true, no error when handling",
			makeTestFunction(null, true, false));
	});
});
