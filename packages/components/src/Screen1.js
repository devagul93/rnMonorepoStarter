import React from "react";
import { View, Text } from "react-native";

export default class Screen1 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "purple"
        }}
      >
        <Text onPress={() => this.props.navigation.navigate("Screen2")}>
          Home Screen. click here to go to screen 2
        </Text>
      </View>
    );
  }
}
