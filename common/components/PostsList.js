import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';

export default class PostsList extends Component {
	render() {
		if (this.props.toList.getRowCount() == 0)
			return (
				<Text>Loading posts, please wait...</Text>
			)
		return (
			<ListView dataSource={this.props.toList}
				onEndReached={() => {
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