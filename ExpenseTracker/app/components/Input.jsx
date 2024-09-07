import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Input({ label, textInputConfig, isInvalid }) {
  return (
    <View className="mx-4 flex-1">
      <Text className="text-xl mx-2">{label}</Text>
      <TextInput
        className={`text-xl bg-gray-300 px-2 py-2 rounded-xl ${
          isInvalid ? " bg-red-200" : ""
        } `}
        {...textInputConfig}
      />
    </View>
  );
}
