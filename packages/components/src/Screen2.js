import React from "react";
import { View, Text } from "react-native";

export default class Screen2 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green"
        }}
      >
        <Text onPress={{}}>Home Screen 2</Text>
      </View>
    );
  }
}
