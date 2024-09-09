import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { data } from "../constants/data";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Recipes({ activeCategory }) {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
      );
      // console.log("got categories", response.data.categories);

      if (response && response.data) {
        // console.log(response.data.meals);
        setRecipes(response.data.meals);
      }
    } catch (error) {
      console.error("Error fetching data:", error); // handle error
    }
  };
  useEffect(() => {
    getRecipes();
  }, [recipes]);

  return (
    <View className="space-y-3 mx-4">
      <Text
        className="text-neutral-700 font-semibold"
        style={{ fontSize: hp(3.4) }}
      >
        Recipes
      </Text>

      {recipes.length > 0 && (
        <MasonryList
          data={recipes}
          keyExtractor={(item) => item.idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RecipeItem index={i} item={item} />}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
}

const RecipeItem = ({ item, index }) => {
  const navigation = useNavigation();

  const isEven = index % 2 === 0;
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("RecipeDetail", { ...item })}
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-between mb-4 space-y-2"
      >
        <Animated.Image
          entering={FadeInUp.duration(1000).delay(index * 100)}
          sharedTransitionTag={item.idMeal}
          style={{
            width: "100%",
            height: index % 3 == 0 ? hp(25) : hp(35),
          }}
          source={{ uri: item.strMealThumb }}
          className="bg-black/5 rounded-3xl"
        />
        <Text className="text-center font-semibold">
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </View>
  );
};
