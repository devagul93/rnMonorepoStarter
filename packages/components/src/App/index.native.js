/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Screen1 from "../Screen1";
import Screen2 from "../Screen2";
import {
  createSwitchNavigator,
  createNavigator,
  getActiveChildNavigationOptions
} from "@react-navigation/core";
import {
  createStackNavigator,
  createAppContainer
} from "@react-navigation/native";

const AppNavigator = createSwitchNavigator(
  {
    Home: Screen1,
    Screen2
  },
  {
    navigationOptions: ({ navigation, screenProps }) => {
      const options = getActiveChildNavigationOptions(navigation, screenProps);
      return { title: options.title };
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
