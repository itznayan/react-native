import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import MealList from "../Components/MealList";
import { context } from "../store/context/Context";
import { MEALS } from "../data/data";

export default function FavouriteItem() {
  const favMealCtx = useContext(context);
  const favMeal = MEALS.filter((meal) => favMealCtx.ids.includes(meal.id));

  return (
    <View>
      {favMeal.length > 0 ? (
        <MealList item={favMeal} />
      ) : (
        <View>
          <Image
            className="h-96 w-full"
            source={require("./../assets/notFound.png")}
          />
          <Text className="text-white text-2xl text-center">
            There is No Favourite Item
          </Text>
        </View>
      )}
    </View>
  );
}
