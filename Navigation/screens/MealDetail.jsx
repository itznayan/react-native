import { View, Text, Image, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/data";
import MealDetails from "../Components/MealDetails";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { context } from "../store/context/Context";
export default function MealDetail({ route }) {
  const favouriteMealCtx = useContext(context);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //favorite item add or remove feature
  const navigation = useNavigation();
  const mealIsFav = favouriteMealCtx.ids.includes(mealId);
  const favChangeHandler = () => {
    if (mealIsFav) {
      favouriteMealCtx.removeFav(mealId);
    } else {
      favouriteMealCtx.addFav(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          onPress={favChangeHandler}
          name={mealIsFav ? "star" : "staro"}
          size={24}
          color="white"
        />
      ),
    });
  }, [navigation, mealIsFav]);
  return (
    <ScrollView>
      <Image
        className="h-64 rounded-xl"
        source={{ uri: selectedMeal.imageUrl }}
      />
      <View className="bg-black rounded-b-2xl mb-4">
        <Text className="py-2 text-2xl font-bold text-center text-white">
          {selectedMeal.title}
        </Text>
        <MealDetails
          addStyle="text-gray-300 "
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
      <Text className="mx-20 text-3xl font-bold text-center text-gray-200 border-b-2 border-white ">
        Ingredients
      </Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text
          className="p-2 mx-20 my-2 text-center bg-gray-300 rounded-xl"
          key={Math.random()}
        >
          {ingredients}
        </Text>
      ))}
      <Text className="mx-20 text-3xl font-bold text-center text-gray-200 border-b-2 border-white ">
        Steps
      </Text>
      {selectedMeal.steps.map((steps) => (
        <Text
          className="p-2 mx-20 my-2 text-center bg-gray-300 rounded-xl"
          key={Math.random()}
        >
          {steps}
        </Text>
      ))}
    </ScrollView>
  );
}
