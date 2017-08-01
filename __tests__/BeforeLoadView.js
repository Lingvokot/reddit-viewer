/*global jest, describe, it, test, jasmine, expect, console*/
/*eslint no-console: "off"*/
import "react-native";
import {ListView, Linking} from "react-native";
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

describe("Testing BeforeLoadView", () => {
	const dummyMockFunc = jest.fn();
	dummyMockFunc.mockImplementation(() => {});
	const getTestingFunction = (finished, error, retryFunc) => {
		return () => {
			const domTree = renderer.create(
				<BeforeLoadView finished={finished} error={error} retryFunc={retryFunc}/>
			);
			const tree = domTree.toJSON();
			expect(tree).toMatchSnapshot();
		};
	};

	test("Rendering case: loading has not finished yet, no error messages occurred before",
		getTestingFunction(false, null, dummyMockFunc));
	test("Rendering case: loading has not finished yet but there was an error before",
		getTestingFunction(false, "Some error occurred", dummyMockFunc));
	test("Rendering case: loading is finished successfully",
		getTestingFunction(true, null, dummyMockFunc));
	test("Rendering case: loading is finished with an error",
		getTestingFunction(true, "Some error occurred", dummyMockFunc));
	test("Checking touchability of \"Retry to load\" button", () => {
		const domTree = renderer.create(
			<BeforeLoadView finished={true} error={"Some error occurred"} retryFunc={dummyMockFunc}/>
		);
		const retryButton = domTree.getInstance().retryButton;
		expect(typeof retryButton.props.onPress).toEqual("function");
		retryButton.props.onPress();
		expect(dummyMockFunc).toBeCalled();
	});
});
