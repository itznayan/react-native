import { View, Text } from "react-native";
import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="mt-4 flex-1 ">
      <StartGameScreen />
      <StatusBar style="dark" />
    </View>
  );
}
