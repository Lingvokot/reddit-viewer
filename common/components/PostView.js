import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Linking, Button } from 'react-native';

export default class PostView extends Component {
	render() {
		let selectedPost = this.props.selectedPost;
		return (
			<View style={{flex: 1, flexDirection: "column"}}>
				<Button onPress={this.props.onBack}
						title="Back"
						style={{paddingTop: 5, paddingBottom: 5}}/>
				<Text style={{fontWeight: "bold", textAlign: "center"}}>
					{selectedPost.title}
				</Text>
				<Text>{`ID: ${selectedPost.name}`}</Text>
				<Text>{`Author: ${selectedPost.author}`}</Text>
				<Text>{`Score: ${selectedPost.score}`}</Text>
				<Text>External URL:</Text>
				<TouchableHighlight
					onPress={() => {
						console.log("Touched");
					}}>
					<Text style={{color: "blue", textDecorationLine: "underline"}}>
						{selectedPost.cleanUrl}
					</Text>
				</TouchableHighlight>
			</View>
		)
	}
}