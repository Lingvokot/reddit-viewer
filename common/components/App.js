import React, { Component } from 'react';
import { Navigator, ListView } from 'react-native';
import PostsList from './PostsList';
import PostView from './PostView';
import BeforeLoadView from './BeforeLoadView';
import { last } from 'lodash/array';
import { each } from 'lodash/collection';
import loadPosts from './loadPosts';

const cardsInPage = 10;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPost: null, postsToList: [], pagesFetched: 0,
			error: null, finished: false
		};
	}
	componentDidMount() {
		if (this.state.postsToList.length == 0)
			this.loadMorePosts();
	}
	loadMorePosts() {
		this.setState({finished: false}, async () => {
			let page = null;
			try {
				if (this.state.postsToList.length == 0)
					page = await loadPosts({limit: 10});
				else {
					const after = last(this.state.postsToList).uuid;
					page = await loadPosts({after, limit: 10});
				}
			}
			catch (e) {
				this.setState({error: e.message, finished: true});
				return;
			}
			let newPosts = Object.values(page.apiResponse.posts);
			this.setState({
				error: null, finished: true,
				postsToList: this.state.postsToList.concat(newPosts),
				pagesFetched: this.state.pagesFetched + 1
			});
		});
	}
	render() {
		if (this.state.error || (!this.state.finished && this.state.postsToList.length == 0))
			return (
				<BeforeLoadView error={this.state.error}
					finished={this.state.finished}
					retryFunc={() => this.loadMorePosts()}/>
			)
		return (
			<Navigator initialRoute={{ title: 'Posts', index: 0 }}
				renderScene={(route, navigator) => {
				const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				if (route.index == 0)
					return (
						<PostsList toList={ds.cloneWithRows(this.state.postsToList)}
							onForward={(selectedPost) => {
								navigator.push({title: selectedPost.title, index: route.index + 1});
								this.setState({selectedPost});
							}}
							onEndReached={() => this.loadMorePosts()}/>
					)
				else
					return (
						<PostView selectedPost={this.state.selectedPost}
							onBack={() => {
								navigator.pop();
								this.setState({selectedPost: null});
							}}/>
					)
			}} />
		);
	}
}