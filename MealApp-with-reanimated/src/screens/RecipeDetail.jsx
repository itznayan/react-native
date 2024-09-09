import { View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated from "react-native-reanimated";
import axios from "axios";
export default function RecipeDetail(props) {
  let item = props.route.params;
  const [meal, setMeal] = useState([]);
    const [loading,setLoading]
  useEffect(() => {
    getRecipeDetail(item.idMeal);
  }, []);
  const getRecipeDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      // console.log("got categories", response.data.categories);

      if (response && response.data) {
        // console.log(response.data.meals);
        setMeal(response.data.meals);
      }
    } catch (error) {
      console.error("Error fetching data:", error); // handle error
    }
  };

  console.log(meal.idMeal);

  return (
    <View>
      <Animated.Image
        sharedTransitionTag={item.idMeal}
        className="rounded-b-3xl"
        style={{ height: hp(45), width: "100%" }}
        source={{ uri: item.strMealThumb }}
      />
      <Text></Text>
    </View>
  );
}
