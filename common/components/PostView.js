import React, { Component, PropTypes } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import FakeHref from './FakeHref';

export default class PostView extends Component {
	constructor(props) {
		super(props);
		this.state = {urlOpenError: null};
	}
	render() {
		let selectedPost = this.props.selectedPost;
		return (
			<View>
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
				<FakeHref url={selectedPost.cleanUrl}
					onCannotHandle={() => {
						alert("Cannot handle this URL");
					}}
					errorHandler={(err) => {
						alert(err.message);
					}}/>
			</View>
		)
	}
}

/*
<Modal animationType={"slide"} transparent={false}
	visible={this.state.urlOpenError != null}
	onRequestClose={() => {
		alert("Modal has been closed.")
	}}>
					<View style={{marginTop: 22}}>
						<View>
							<Text>Hello World!</Text>
							<TouchableHighlight onPress={() => {
								this.setModalVisible(!this.state.modalVisible)
							}}>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
*/