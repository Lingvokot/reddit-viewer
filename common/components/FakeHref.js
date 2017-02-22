import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, Linking, Text } from 'react-native';

export default class FakeHref extends Component {
	render() {
		return (
			<TouchableHighlight
				onPress={() => {
					Linking.canOpenURL(this.props.url).then(supported => {
						if (!supported)
							this.props.onCannotHandle();
						else
							return Linking.openURL(this.props.url);
					}).catch(this.props.errorHandler);
				}}>
				<Text style={{color: "blue", textDecorationLine: "underline"}}>
					{this.props.url}
				</Text>
			</TouchableHighlight>
		);
	}
}