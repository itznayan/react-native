import { View, Text } from "react-native";
import React from "react";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  addStyle,
}) {
  return (
    <View className=" flex pb-8 px-16 justify-between flex-row">
      <Text className={`${addStyle} uppercase`}>{duration} Minutes</Text>
      <Text className={`${addStyle} uppercase`}>{complexity} </Text>
      <Text className={`${addStyle} uppercase`}>{affordability}</Text>
    </View>
  );
}
