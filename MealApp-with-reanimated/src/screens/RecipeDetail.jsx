import { View, Image, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated from "react-native-reanimated";
import axios from "axios";
import Loading from "../components/Loading";
import YoutubeIframe from "react-native-youtube-iframe";
import {
  ClockIcon,
  EyeIcon,
  GifIcon,
  TvIcon,
  UserIcon,
} from "react-native-heroicons/outline";
export default function RecipeDetail(props) {
  let item = props.route.params;
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setMeal(response.data.meals[0]);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error); // handle error
    }
  };
  const getYtVideoID = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };
  return (
    <ScrollView className="space-y-2">
      <Animated.Image
        className="rounded-b-3xl"
        style={{ height: hp(45), width: "100%" }}
        source={{ uri: item.strMealThumb }}
      />
      {loading ? (
        <Loading size="large" className="mt-28" />
      ) : (
        <View>
          <Text className="mx-2 text-black font-semibold text-2xl">
            {meal?.strMeal}
          </Text>
          <View className="flex flex-row px-1">
            <Text className="mx-2 text-sm text-neutral-500">
              {meal?.strCategory}
            </Text>
            <Text className="mx-2 text-sm text-neutral-500">
              {meal?.strArea}
            </Text>
            <Text className="mx-2 text-sm text-neutral-500">
              {meal?.strTags}
            </Text>
          </View>
          <View className="mx-8 my-4">
            {/* different calsuls */}
            <View className="flex-row justify-evenly">
              <View
                style={{ width: hp(9) }}
                className="flex items-center bg-yellow-400 rounded-full px-2 py-4"
              >
                <View
                  className="bg-white rounded-full justify-center items-center"
                  style={{ height: hp(6.5), width: hp(6.5) }} // Correct width and height using `hp` for consistency
                >
                  <ClockIcon size={hp(4.5)} color={"black"} strokeWidth={2.5} />
                </View>
                <View className=" flex items-center">
                  <Text className="text-lg font-bold">35</Text>
                  <Text className="text-sm text-gray-700">Mins</Text>
                </View>
              </View>

              <View
                style={{ width: hp(9) }}
                className="flex items-center bg-yellow-400 rounded-full px-2 py-4"
              >
                <View
                  className="bg-white rounded-full justify-center items-center"
                  style={{ height: hp(6.5), width: hp(6.5) }} // Correct width and height using `hp` for consistency
                >
                  <UserIcon size={hp(4.5)} color={"black"} strokeWidth={2.5} />
                </View>
                <View className=" flex items-center">
                  <Text className="text-lg font-bold">Non</Text>
                  <Text className="text-sm text-gray-700">veg</Text>
                </View>
              </View>

              <View
                style={{ width: hp(9) }}
                className="flex items-center bg-yellow-400 rounded-full px-2 py-4"
              >
                <View
                  className="bg-white rounded-full justify-center items-center"
                  style={{ height: hp(6.5), width: hp(6.5) }} // Correct width and height using `hp` for consistency
                >
                  <EyeIcon size={hp(4.5)} color={"black"} strokeWidth={2.5} />
                </View>
                <View className=" flex items-center">
                  <Text className="text-lg font-bold">Non</Text>
                  <Text className="text-sm text-gray-700">veg</Text>
                </View>
              </View>

              <View
                style={{ width: hp(9) }}
                className="flex items-center bg-yellow-400 rounded-full px-2 py-4"
              >
                <View
                  className="bg-white rounded-full justify-center items-center"
                  style={{ height: hp(6.5), width: hp(6.5) }} // Correct width and height using `hp` for consistency
                >
                  <TvIcon size={hp(4.5)} color={"black"} strokeWidth={2.5} />
                </View>
                <View className=" flex items-center">
                  <Text className="text-lg font-bold">Easy</Text>
                  <Text className="text-sm text-gray-700">veg</Text>
                </View>
              </View>
            </View>

            {/* end */}
          </View>

          <View className="px-2 ">
            <Text className="text-3xl my-4">Instruction</Text>
            <Text className="text-md ">{meal.strInstructions}</Text>
          </View>
          <Text className="font-bold mx-2 text-3xl mb-4">Recipe Video</Text>
          <View className="mx-4">
            <YoutubeIframe
              videoId={getYtVideoID(meal.strYoutube)}
              height={hp(30)}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
}
