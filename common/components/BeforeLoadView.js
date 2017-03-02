import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class BeforeLoadView extends Component {
	render() {
		if (!this.props.finished)
			return (
				<Text>Loading posts, please wait...</Text>
			);
		else if (this.props.error)
			return (
				<View>
					<Text>{this.props.error}</Text>
					<Button title="Retry to load"
							onPress={this.props.retryFunc}
							style={{
								paddingTop: 5, paddingBottom: 5,
								margin: 5
							}} ref={(ref) => {this.retryButton = ref;}}/>
				</View>
			);
		else
			return null;
	}
}