import { View, Text, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../app/components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View
      style={{ elevation: 20 }}
      className="flex justify-center items-center mx-6 rounded-lg p-4 mt-32 bg-pink-800"
    >
      <TextInput
        maxLength={2}
        className="bg-gray-100 p-2 mb-4 text-2xl h-12 w-16 border-[#ddb52f] border-b-8 px-4 rounded-md text-center font-bold"
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View className="flex flex-row  gap-4">
        <View className="flex-1">
          <PrimaryButton title="Reset" />
        </View>
        <View className="flex-1">
          <PrimaryButton title="Confirm" />
        </View>
      </View>
    </View>
  );
}
