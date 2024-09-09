import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import axios from "axios";
import Recipes from "../components/Recipes";

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      // console.log("got categories", response.data.categories);

      if (response && response.data) {
        // console.log(response.data);
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.error("Error fetching data:", error); // handle error
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View className="bg-white flex-1">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-4 pt-14"
      >
        {/* avatar and bellicon  */}

        <View className="flex-row justify-between mx-4">
          <Image
            style={{ height: hp(5), width: hp(5.5) }}
            className="rounded-full"
            source={require("../../assets/avatar.jpg")}
          />
          <BellIcon size={hp(4)} color={"gray"} />
        </View>

        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.8) }} className="text-neutral-800">
            Hey, Mahera
          </Text>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-800 "
          >
            Savor more, waste less,
          </Text>
          <View className="flex-row mb-4">
            <Text
              style={{ fontSize: hp(4) }}
              className="font-semibold text-neutral-800"
            >
              Stay at{" "}
            </Text>
            <Text
              style={{ fontSize: hp(4) }}
              className="font-semibold text-orange-500"
            >
              Home
            </Text>
          </View>

          {/* searchbar for search item */}

          <View className="bg-black/10  rounded-full flex-row items-center py-2 justify-between px-4">
            <TextInput
              placeholder="Search any recipe"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(2.8) }}
            />
            <View className="bg-white rounded-full p-4">
              <MagnifyingGlassIcon size={20} color={"gray"} strokeWidth={3} />
            </View>
          </View>
        </View>

        {/* categories section for various food item */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </View>

        <View>
          {categories.length > 0 && <Recipes activeCategory={activeCategory} />}
        </View>
      </ScrollView>
    </View>
  );
}
