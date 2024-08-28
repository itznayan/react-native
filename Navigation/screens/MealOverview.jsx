import { View, Text, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/data";
import { CATEGORIES } from "../data/data";
import MealItem from "../Components/MealItem";
export default function MealOverview({ route, navigation }) {
  const catId = route.params.categoriesId;
  const displayedMeal = MEALS.filter(
    (meals) => meals.categoryIds.indexOf(catId) >= 0
  );
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);
  const renderItems = (item) => {
    return (
      <MealItem
        id={item.item.id}
        title={item.item.title}
        image={item.item.imageUrl}
        complexity={item.item.complexity}
        duration={item.item.duration}
        affordability={item.item.affordability}
      />
    );
  };
  return (
    <View className="flex-1 p-4">
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
      />
    </View>
  );
}
