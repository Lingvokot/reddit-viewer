import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';

export default class PostsList extends Component {
	render() {
		return (
			<ListView dataSource={this.props.toList}
				renderRow={(rowData) => (
					<TouchableHighlight style={{
							borderWidth: 1,
							borderRadius: 3,
							borderColor: "red",
							margin: 5,
							padding: 5
						}}
						onPress={() => {this.props.onForward(rowData);}}
						onEndReached={() => {console.log("End reached");}}>
						<Text>{rowData.title}</Text>
					</TouchableHighlight>
				)}/>
		);
	}
}

/*

				onEndReached={this.props.onEndReached}
*/