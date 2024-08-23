import { View, Text } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <Text className="text-3xl text-center text-orange-400 font-bold border-2 border-orange-400 p-3">
      {children}
    </Text>
  );
}
