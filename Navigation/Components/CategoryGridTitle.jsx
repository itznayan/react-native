import { View, Text, Pressable } from "react-native";
import React from "react";

export default function CategoryGridTitle({ title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
