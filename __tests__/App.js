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

describe("Testing App component", () => {
	it("Testing first rendering", () => {
		const domTree = renderer.create(<Index/>);
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("Testing main logic on App component", () => {
	let instance = null;
	//here and below are extreme kludges used to start the process of mocked fetching
	const loadFirstPosts = (callback) => {
		instance.setState({inProcess: false}, () => {
			instance.loadMorePosts().then(() => {
				instance.setState({pagesFetched: 1, postsToList: instance.state.postsToList.slice(0, 10)}, callback);
			});
		});
	};
	test("Loading list of posts with loadMorePosts", (done) => {
		const domTree = renderer.create(
			<App/>
		);
		instance = domTree.getInstance();
		loadFirstPosts(() => {
			instance.loadMorePosts().then(() => {
				expect(domTree.toJSON()).toMatchSnapshot();
				done();
			});
		});
	});
	test("Loading list of posts with onEndReached of postsList", (done) => {
		const domTree = renderer.create(
			<App/>
		);
		instance = domTree.getInstance();
		loadFirstPosts(() => {
			instance.postsList.props.onEndReached().then(() => {
				expect(domTree.toJSON()).toMatchSnapshot();
				done();
			});
		});
	});
	test("Checking whether displaying of details is correct", (done) => {
		const domTree = renderer.create(
			<App/>
		);
		instance = domTree.getInstance();
		loadFirstPosts(() => {
			instance.postsList.props.onEndReached().then(() => {
				let toPress = instance.postsList.listElements[0];
				toPress.props.onPress().then(() => {
					expect(domTree.toJSON()).toMatchSnapshot();
					done();
				});
			});
		});
	});
	test("Checking whether \"Back\" button works correctly", (done) => {
		const domTree = renderer.create(
			<App/>
		);
		instance = domTree.getInstance();
		loadFirstPosts(() => {
			instance.postsList.props.onEndReached().then(() => {
				let toPress = instance.postsList.listElements[0];
				toPress.props.onPress().then(() => {
					let toPress = instance.postView.backButton;
					toPress.props.onPress().then(() => {
						expect(domTree.toJSON()).toMatchSnapshot();
						done();
					});
				});
			});
		});
	});
});
