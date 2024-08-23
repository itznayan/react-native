import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function GameOverScreen() {
  return (
    <View className="mt-10">
      <Text className="text-3xl text-center">Game Over ! </Text>
      <View className="flex items-center justify-center mt-20">
        <TouchableOpacity className="bg-pink-700 p-2 rounded-2xl">
          <Text className="text-2xl">Wanna Play Agian !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
