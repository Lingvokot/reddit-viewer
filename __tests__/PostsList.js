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

const answer2 = {
	"posts": {
		"t3_5vpnjl": {
			"cleanUrl":"http://www.businessinsider.com.au/elijah-wood-hollywood-pedophile-ring-2016-5?r=US&IR=T",
			"createdUTC":1487844877,"name":"t3_5vpnjl","author":"yeoldgolddigger",
			"title":"Elijah Wood says there's a secret paedophile ring in Hollywood and child actors are 'prey'",
			"score":4329
		},
		"t3_5vo7nw": {
			"cleanUrl":"https://i.redd.it/9un6j34abjhy.png",
			"createdUTC":1487824111,"name":"t3_5vo7nw","author":"iwvp",
			"title":"Alien visits /pol/",
			"score":16119
		},
		"t3_5vo5en": {
			"cleanUrl":"https://motherboard.vice.com/en_us/article/3000-scientists-have-asked-for-help-running-for-office-to-oppose-trump",
			"createdUTC":1487823483,"name":"t3_5vo5en","author":"200357931",
			"title":"3,000 Scientists Have Asked for Help Running for Office to Oppose Trump",
			"score":13851
		},
		"t3_5vol5q": {
			"cleanUrl":"http://www.cnn.com/2017/02/22/politics/boy-toby-question-tom-cotton-town-hall-trnd/",
			"createdUTC":1487828174,"name":"t3_5vol5q","author":"doogie92",
			"title":"7-year-old to senator: Don't take away PBS to build the wall.",
			"score":6880
		},
		"t3_5vo599": {
			"cleanUrl":"https://www.nytimes.com/2015/01/14/opinion/tom-hanks-on-his-two-years-at-chabot-college.html?_r=1",
			"createdUTC":1487823444, "name":"t3_5vo599", "author":"freddyjohnson",
			"title":"TIL Tom Hanks is a big fan of community colleges. Since he had poor grades in high school and lousy SAT scores Hanks ended up at Chabot, a nearby community college, because it accepted everyone and was free.",
			"score":12347
		},
		"t3_5vo8c6": {
			"cleanUrl":"http://i.imgur.com/lxVpCqu.gifv",
			"createdUTC":1487824312,"name":"t3_5vo8c6","author":"ClosingDownSummer",
			"title":"Just a guy taking down the Confederate Flag on live TV",
			"score":38763
		},
		"t3_5vo1ow": {
			"cleanUrl":"/r/Showerthoughts/comments/5vo1ow/as_a_child_i_pretended_to_like_carrots_for_my/",
			"createdUTC":1487822460, "name":"t3_5vo1ow", "author":"Jalexgeorge",
			"title":"As a child I pretended to like carrots for my parents. As an adult I pretend to like them for my child. I fucking hate carrots.",
			"score":23182
		},
		"t3_5voqhq": {
			"cleanUrl":"https://i.redd.it/yyosucwfsjhy.gif",
			"createdUTC":1487829864,"name":"t3_5voqhq","author":"nyr3188",
			"title":"Runaway truck",
			"score":4727
		},
		"t3_5vnlu2": {
			"cleanUrl":"https://www.theguardian.com/world/2017/feb/23/north-korea-malaysia-investigating-kim-jong-nam-death",
			"createdUTC":1487818229,"name":"t3_5vnlu2","author":"EpycWyn",
			"title":"North Korea demands Malaysia stop investigating Kim Jong-nam death",
			"score":20560
		},
		"t3_5vnp96": {
			"cleanUrl":"http://i.imgur.com/GPxQTZY.jpg",
			"createdUTC":1487819173,"name":"t3_5vnp96","author":"Ferenginar",
			"title":"$0.25 out of a machine. $947.36 out of a dog. Gotta love that smug \"worth it\" look.",
			"score":48443
		},

	}
};

describe("Testing PostsList", () => {
  let returnedValue = null;
	const content = Object.values(answer2.posts);
  const mockOnForward = jest.fn();
	mockOnForward.mockImplementation((row) => {returnedValue = row;});
  const mockOnEndReached = jest.fn();
	mockOnEndReached.mockImplementation(() => {});
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  test("Rendering case: there are no posts yet", () => {
		const domTree = renderer.create(
  		<PostsList toList={ds.cloneWithRows([])} onForward={mockOnForward}
        onEndReached={mockOnEndReached}/>
  	);
  	const tree = domTree.toJSON();
  	expect(tree).toMatchSnapshot();
	});
  test("Rendering case: there are some posts", () => {
  	const domTree = renderer.create(
  		<PostsList toList={ds.cloneWithRows(content)}
				onForward={mockOnForward} onEndReached={mockOnEndReached}/>
  	);
  	const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
  });
	test("Checking reaction on onEndReached event", () => {
  	const domTree = renderer.create(
  		<PostsList toList={ds.cloneWithRows(content)} onForward={mockOnForward}
        onEndReached={mockOnEndReached}/>
  	);
  	const listView = domTree.getInstance().listView;
  	expect(typeof listView.props.onEndReached).toEqual("function");
		listView.props.onEndReached();
  	expect(mockOnEndReached).toBeCalled();
  });
	test("Checking touchability of post headers", () => {
  	const domTree = renderer.create(
  		<PostsList toList={ds.cloneWithRows(content)}
				onForward={mockOnForward} onEndReached={mockOnEndReached}/>
  	);
  	const listElements = domTree.getInstance().listElements;
		const expectedLength = Object.keys(answer2.posts).length;
  	expect(listElements.length).toEqual(expectedLength);
  	for (let i = 0; i < expectedLength; i++) {
			const element1 = listElements[i];
  		expect(typeof element1.props.onPress).toEqual("function");
  		element1.props.onPress();
  		expect(mockOnForward.mock.calls.length).toEqual(i + 1);
			expect(JSON.stringify(returnedValue)).toEqual(JSON.stringify(content[i]));
  	}
  });
});
