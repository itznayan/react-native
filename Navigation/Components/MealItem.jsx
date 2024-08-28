import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
export default function MealItem({
  id,
  title,
  image,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();
  const selectMealHandler = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };
  return (
    <View className="bg-white overflow-hidden rounded-3xl shadow mb-6">
      <Pressable onPress={selectMealHandler} android_ripple={{ color: "#ccc" }}>
        <View>
          <Image className="h-48 rounded-xl" source={{ uri: image }} />
          <Text className="py-2 text-xl font-bold text-center"> {title}</Text>
        </View>
        <View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
