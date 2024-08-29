import { TouchableOpacity, Text, View, Pressable } from "react-native";
import React from "react";

export default function SubButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-black w-48 active:bg-black/60 mx-auto rounded-xl px-4 py-2"
    >
      <Text className="text-white text-center text-xl">{title}</Text>
    </Pressable>
  );
}
