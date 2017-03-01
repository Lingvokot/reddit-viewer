import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView } from 'react-native';

export default class PostsList extends Component {
	render() {
		this.listElements = [];
		if (this.props.toList.getRowCount() == 0)
			return (
				<Text>There are no posts yet.</Text>
			)
		return (
			<ListView dataSource={this.props.toList}
				onEndReached={() => {
					return new Promise(resolve => {
						this.props.onEndReached();
					}).then(() => resolve());
				}}
				renderRow={(rowData) => (
					<TouchableHighlight style={{
							borderWidth: 1,
							borderRadius: 3,
							borderColor: "red",
							margin: 5,
							padding: 5
						}} ref={(ref) => {
							if (ref)
								this.listElements.push(ref);
						}}
						onPress={() => this.props.onForward(rowData)}>
						<Text>{rowData.title}</Text>
					</TouchableHighlight>
				)} ref={(ref) => {this.listView = ref;}}/>
		);
	}
}