import 'react-native';
import {ListView} from 'react-native';
import React from 'react';
import Index from '../index.android.js';
import loadPosts from '../__mocks__/common/components/loadPosts';
import BeforeLoadView from '../common/components/BeforeLoadView';
import PostView from '../common/components/PostView';
import PostsList from '../common/components/PostsList';
import FakeHref from '../common/components/FakeHref';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('../common/components/loadPosts');
jest.useFakeTimers();

const answer1 = {
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
		"t3_5vnjqm": {
			"cleanUrl":"http://i.imgur.com/7YKo3w3.gifv",
			"createdUTC":1487817633,"name":"t3_5vnjqm","author":"RuchW",
			"title":"Today's Google Doodle is pretty amazing [GIF]",
			"score":43695
		},
		"t3_5vo45r": {
			"cleanUrl":"https://gfycat.com/OpenKeyAfricanmolesnake",
			"createdUTC":1487823147,"name":"t3_5vo45r","author":"namraka",
			"title":"Shooting at a snake, WCGW?",
			"score":5654
		},
		"t3_5vowxr": {
			"cleanUrl":"/r/Overwatch/comments/5vowxr/hey_jeff_as_a_lucio_main_i_think_its_imperative/",
			"createdUTC":1487831948,"name":"t3_5vowxr","author":"FelonysShadow",
			"title":"Hey Jeff, as a Lucio main, I think it's imperative to get Hippity Hoppity Get off My Property as a voice line.",
			"score":3137
		},
		"t3_5vnbtl": {
			"cleanUrl":"http://i.imgur.com/pICwGoj.png",
			"createdUTC":1487815533,"name":"t3_5vnbtl","author":"redsox1524",
			"title":"Love, Morriage, Boby?",
			"score":12638
		},
		"t3_5vnnzh": {
			"cleanUrl":"http://www.simonstalenhag.se/bilderbig/by_renderfarm_1920.jpg",
			"createdUTC":1487818832,"name":"t3_5vnnzh","author":"Cyrusdexter",
			"title":"Render Farm, Simon Stålenhag, Digital, 2017 (1920x1920)",
			"score":11383
		},
		"t3_5vny22": {
			"cleanUrl":"https://i.redd.it/b2205igl3jhy.jpg",
			"createdUTC":1487821473,"name":"t3_5vny22","author":"TBoneTheOriginal",
			"title":"My great grandfather, posing with his bicycle in 1894",
			"score":7540
		},
		"t3_5vnmzx": {
			"cleanUrl":"https://i.reddituploads.com/e3f34897e0d24cb9b266c89712a0c7c3?fit=max&h=1536&w=1536&s=b19610aae32f95c77bf4d0c84dc123ca",
			"createdUTC":1487818558, "name":"t3_5vnmzx", "author":"chipperblueberry",
			"title":"I volunteer at the humane society and this girl shook my hand when I first met her! Dogs are the best",
			"score":8899
		},
		"t3_5vnqcp": {
			"cleanUrl":"https://www.youtube.com/watch?v=EkXgRlRao5I",
			"createdUTC":1487819457,"name":"t3_5vnqcp","author":"filmfanatic5",
			"title":"Alien: Covenant | “Prologue: Last Supper\" [HD] | 20th Century FOX",
			"score":7291
		},
		"t3_5vnfzu": {
			"cleanUrl":"http://imgur.com/8r7tPbo",
			"createdUTC":1487816634,"name":"t3_5vnfzu","author":"Mystery22X",
			"title":"Admit it, you'll do the same thing when you get yours",
			"score":8619
		},
		"t3_5vn6uj": {
			"cleanUrl":"https://gfycat.com/MeekObeseAnole",
			"createdUTC":1487814235,"name":"t3_5vn6uj","author":"Alpha-Phoenix",
			"title":"The North Star isn't special because it's bright. It's unique because it appears to stand still!",
			"score":8971
		},
		"t3_5vmvpj": {
			"cleanUrl":"http://i.imgur.com/pI8vkWY.gifv",
			"createdUTC":1487811351,"name":"t3_5vmvpj","author":"RespectMyAuthoriteh",
			"title":"\"Is he coming?\"",
			"score":11569
		},
		"t3_5vnmwd": {
			"cleanUrl":"http://www.forbes.com/sites/jaymcgregor/2017/02/20/reddit-is-being-manipulated-by-big-financial-services-companies/#9d4c3951e150",
			"createdUTC":1487818529,"name":"t3_5vnmwd","author":"skoalbrother",
			"title":"Reddit is Being Manipulated By Big Financial Services Companies",
			"score":6031
		},
		"t3_5vmqix": {
			"cleanUrl":"http://www.reuters.com/article/us-usa-trump-lgbt-idUSKBN161243?il=0",
			"createdUTC":1487810048,"name":"t3_5vmqix","author":"truthmatters286s",
			"title":"Trump revokes Obama guidelines on transgender bathrooms",
			"score":40214
		},
		"t3_5vmj8y": {
			"cleanUrl":"https://i.redd.it/qnhu1ird0ihy.jpg",
			"createdUTC":1487808324,"name":"t3_5vmj8y","author":"Derp43",
			"title":"Robert filed a five day protesting permit with the city so he can yell at Best Buy for the rest of the week.",
			"score":53704
		},
		"t3_5vms93": {
			"cleanUrl":"https://i.imgur.com/zDiiSAV.gifv",
			"createdUTC":1487810490,"name":"t3_5vms93","author":"IHaeTypos",
			"title":"Battle Simulator - chicken vs 20,000 soldiers",
			"score":42496
		}
	}
};

const answer2 = {
	"posts": {}
};

const answer3 = {
	"posts": {}
};

const keys = Object.keys(answer1.posts);
for (let key1 of keys)
	answer1.posts[key1].uuid = answer1.posts[key1].name;
for (let i = 0; i < 10; i++)
	answer2.posts[keys[i]] = answer1.posts[keys[i]];
for (let i = 10; i < 15; i++)
	answer3.posts[keys[i]] = answer1.posts[keys[i]];

it('first rendering is correct', () => {
	const domTree = renderer.create(
		<Index/>
	);
	console.log(JSON.stringify(domTree));
	const tree = domTree.toJSON();
	expect(tree).toMatchSnapshot();
});

describe('testing BeforeLoadView', () => {
	let dummyMockFunc = jest.fn();
	dummyMockFunc.mockImplementation(() => {console.log('"Retry to load" button pressed');});
	let getTestingFunction = (finished, error, retryFunc) => {
		return () => {
			const domTree = renderer.create(
				<BeforeLoadView finished={finished} error={error} retryFunc={retryFunc}/>
			)
			const tree = domTree.toJSON();
			expect(tree).toMatchSnapshot();
			
		};
	}
	test('Loading has not finished yet, no error messages occurred before',
		getTestingFunction(false, null, dummyMockFunc));
	test('Loading has not finished yet but there was an error before',
		getTestingFunction(false, 'Some error occurred', dummyMockFunc));
	test('Loading is finished successfully',
		getTestingFunction(true, null, dummyMockFunc));
	test('Loading is finished with an error', 
		getTestingFunction(true, 'Some error occurred', dummyMockFunc));
	/*test('Checking touchability of "Retry to load" button', () => {
	
	});*/
});

describe('testing PostView', () => {
	let dummyMockFunc = jest.fn();
	dummyMockFunc.mockImplementation(() => {console.log("Back button pressed");});
	test('testing general rendering', () => {
		const domTree = renderer.create(
			<PostView selectedPost={answer1.posts[keys[0]]}
						onBack={dummyMockFunc}/>
		);
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
	});
	/*test('Checking touchability of link', () => {

	})*/
});

describe('testing PostsList', () => {
	let mockOnForward = jest.fn();
	mockOnForward.mockImplementation((row) => {console.log(row);});
	let mockOnEndReached = jest.fn();
	mockOnEndReached.mockImplementation(() => {console.log("End reached");});
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	test('testing rendering when there are no posts yet', () => {
		const domTree = renderer.create(
			<PostsList toList={ds.cloneWithRows([])}
				onForward={mockOnForward} onEndReached={mockOnEndReached}/>
		);
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('testing rendering when there are some posts', () => {
		const domTree = renderer.create(
			<PostsList toList={ds.cloneWithRows(Object.values(answer2.posts))}
				onForward={mockOnForward} onEndReached={mockOnEndReached}/>
		);
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
	});
	/*test('checking touchability of post headers', () => {

	});*/
});

describe('testing FakeHref', () => {
	let mockOnCannotHandle = jest.fn();
	mockOnCannotHandle.mockImplementation(() => {console.log("Cannot handle");});
	let mockOnError = jest.fn();
	mockOnError.mockImplementation((error) => {console.log(error);});
	test('testing general rendering', () => {
		const domTree = renderer.create(
			<FakeHref url={answer1.posts[keys[0]].cleanUrl}
				onCannotHandle={mockOnCannotHandle}
				errorHandler={mockOnError}/>
		);
		const tree = domTree.toJSON();
		expect(tree).toMatchSnapshot();
	});
	/*test('testing touchability of this component', () => {

	});*/
});

/*
it('testing main logic on App component', () => {

});*/

it('mock works well', async () => {
	let defaultLoad = await loadPosts();
	let withLimit = await loadPosts({limit: 10});
	let withOffset = await loadPosts({limit: 5, after: keys[9]});
	expect(JSON.stringify(defaultLoad)).toEqual(JSON.stringify(answer1));
	expect(JSON.stringify(withLimit)).toEqual(JSON.stringify(answer2));
	expect(JSON.stringify(withOffset)).toEqual(JSON.stringify(answer3));
});