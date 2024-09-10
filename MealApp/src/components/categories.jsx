import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { data } from "../constants/data";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function Categories({
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <View entering={FadeInDown.duration(500).springify().delay(400)}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((item, index) => {
          let isActive = item.strCategory == activeCategory;
          let activeButtonClass = isActive ? " bg-amber-400" : " bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              className="flex-1 items-center "
              onPress={() => setActiveCategory(item.strCategory)}
            >
              <Animated.View
                entering={FadeInUp.springify().delay(index * 100)}
                exiting={FadeInDown.springify().delay(index * 50)}
                className={"p-2 rounded-full" + activeButtonClass}
              >
                <Image
                  style={{ height: hp(6), width: hp(6) }}
                  source={{ uri: item.strCategoryThumb }}
                  className="rounded-full "
                />
              </Animated.View>
              <Text className="text-neutral-800">{item.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
