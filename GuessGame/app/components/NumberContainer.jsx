import { View, Text } from "react-native";
import React from "react";

export default function NumberContainer({ children }) {
  return (
    <View className="border-1 border-orange-500 rounded-full m-6 items-center justify-center">
      <Text className="text-orange-400 font-bold">{children}</Text>
    </View>
  );
}
