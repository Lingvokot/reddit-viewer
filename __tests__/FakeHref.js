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

describe("Testing FakeHref", () => {
	const cleanUrl = "http://www.businessinsider.com.au/elijah-wood-hollywood-pedophile-ring-2016-5?r=US&IR=T";

	test("General rendering", () => {
		const mockOnCannotHandle = jest.fn();
		mockOnCannotHandle.mockImplementation(() => {});
		const mockOnError = jest.fn();
		mockOnError.mockImplementation((error) => {
			console.log(`Error "${error.message}" is successfully caught`);
		});
		const domTree = renderer.create(
			<FakeHref url={cleanUrl}
				onCannotHandle={mockOnCannotHandle}
				errorHandler={mockOnError}/>
		);
		const highlight = domTree.getInstance().highlight;
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
		expect(typeof highlight.props.onPress).toEqual("function");
	});
	test("Touch handling: some internal will occur if we try to open URL, canOpenURL returns false", (done) => {
		configureMock(false, true);
		const mockOnCannotHandle = jest.fn();
		mockOnCannotHandle.mockImplementation(() => {
			makeArtificialErrorEvent({error: "Cannot handle"});
		});
		const mockOnError = jest.fn();
		mockOnError.mockImplementation((error) => {
			console.log(`Error "${error.message}" is successfully caught`);
		});
		const domTree = renderer.create(
			<FakeHref url={cleanUrl}
				onCannotHandle={mockOnCannotHandle}
				errorHandler={mockOnError}/>
		);
		const highlight = domTree.getInstance().highlight;
		Linking.addEventListener("url", (event) => {
			expect(event.error).toEqual("Cannot handle");
			expect(mockOnError).not.toBeCalled();
			Linking.removeAllEventListeners();
			done();
		});
		highlight.props.onPress();
	});
	test("Touch handling: some internal error will occur if we open URL but canOpenURL returns true", (done) => {
		configureMock(true, true);
		const mockOnCannotHandle = jest.fn();
		mockOnCannotHandle.mockImplementation(() => {expect(true).toBeFalsy();});
		const mockOnError = jest.fn();
		mockOnError.mockImplementation((error) => {
			console.log(`Error "${error.message}" is successfully caught`);
			done();
		});
		const domTree = renderer.create(
			<FakeHref url={cleanUrl}
				onCannotHandle={mockOnCannotHandle}
				errorHandler={mockOnError}/>
		);
		const highlight = domTree.getInstance().highlight;
		highlight.props.onPress();
	});
	test("Touch handling: all must be OK", (done) => {
		configureMock(true, false);
		const mockOnCannotHandle = jest.fn();
		mockOnCannotHandle.mockImplementation(() => {});
		const mockOnError = jest.fn();
		mockOnError.mockImplementation((error) => {
			console.log(`Error "${error.message}" is successfully caught`);
		});
		const domTree = renderer.create(
			<FakeHref url={cleanUrl}
				onCannotHandle={mockOnCannotHandle}
				errorHandler={mockOnError}/>
		);
		const highlight = domTree.getInstance().highlight;
		Linking.addEventListener("url", (event) => {
			expect(event.error).toBeUndefined();
			expect(event.url).toEqual(cleanUrl);
			expect(mockOnCannotHandle).not.toBeCalled();
			expect(mockOnError).not.toBeCalled();
			Linking.removeAllEventListeners();
			done();
		});
		highlight.props.onPress();
	});
});
