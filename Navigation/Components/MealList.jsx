import { View, Text } from "react-native";
import React from "react";
import MealItem from "./MealItem";

export default function MealList({ item }) {
  return (
    <View>
      {item.map((item) => (
        <MealItem
          key={Math.random() * 10}
          title={item.title}
          image={item.imageUrl}
          duration={item.duration}
          affordability={item.affordability}
          complexity={item.complexity}
        />
      ))}
    </View>
  );
}
