/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./common/components/App";

export default class redditViewer extends Component {
	render() {
		return (<App/>);
	}
}
AppRegistry.registerComponent("redditViewer", () => redditViewer);