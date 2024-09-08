import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FlipInXUp,
  FlipOutXDown,
  useSharedValue,
} from "react-native-reanimated";
import { MotiView } from "moti";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const introText = ["Everyday a", "new dish", "for you"];
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);
  }, []);

  return (
    <View className="flex-1 bg-[#1C1E21] justify-center">
      <StatusBar style="light" />

      <View className="bg-[#86B681]  justify-center h-32 rounded-l-full mt-20 w-96 left-20">
        <MotiView
          className=" -left-16 bg-white/20 rounded-full absolute"
          from={{ rotate: "0deg", left: 280, padding: 0 }}
          animate={{ rotate: "160deg", left: -80, padding: hp(5.5) }}
          transition={{ duration: 5000, type: "spring", delay: 400 }}
        >
          <MotiView
            from={{ padding: 0 }}
            animate={{ padding: hp(5) }}
            transition={{
              duration: 1000,
              type: "timing",
              delay: 1000,
            }}
            className="bg-white/30 rounded-full"
          >
            <Image
              className="w-28 h-28"
              source={require("./../../assets/food.png")}
            />
          </MotiView>
        </MotiView>
      </View>
      <View className="px-8 top-36 ">
        {introText.map((text, index) => (
          <Animated.Text
            key={index}
            entering={FlipInXUp.duration(400).delay(index * 650)}
            exiting={FlipOutXDown.duration(400).delay(index * 200)}
            className="text-5xl text-white font-light"
          >
            {text}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
}
