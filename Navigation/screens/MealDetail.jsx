import { View, Text } from "react-native";
import React from "react";

export default function MealDetail({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text className="text-white">MealDetail {mealId}</Text>
    </View>
  );
}
