import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';

export default class PostsList extends Component {
	render() {
		return (
			<ListView dataSource={this.props.toList}
				onEndReached={() => {
					console.log("end reached");
					this.props.onEndReached();
				}}
				renderRow={(rowData) => (
					<TouchableHighlight style={{
							borderWidth: 1,
							borderRadius: 3,
							borderColor: "red",
							margin: 5,
							padding: 5
						}}
						onPress={() => {this.props.onForward(rowData);}}>
						<Text>{rowData.title}</Text>
					</TouchableHighlight>
				)}/>
		);
	}
}