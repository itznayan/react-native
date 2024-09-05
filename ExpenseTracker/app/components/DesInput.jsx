import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function DesInput({ label, textInputConfig }) {
  return (
    <View className="mx-4">
      <Text className="text-xl mx-2">{label}</Text>
      <TextInput
        className="text-xl min-h-[100] bg-gray-300 px-4 py-2 rounded-3xl"
        {...textInputConfig}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    textAlignVertical: "top",
  },
});
