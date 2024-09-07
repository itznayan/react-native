import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FlipInXUp, FlipOutXDown } from "react-native-reanimated";
import { MotiView } from "moti";

export default function WelcomeScreen() {
  const introText = ["Everyday a", "new dish", "for you"];
  return (
    <View className="flex-1 bg-[#1C1E21] justify-center">
      <StatusBar style="light" />

      <View className="bg-[#86B681]  justify-center h-32 rounded-l-full mt-20 w-96 left-20">
        <MotiView
          className=" -left-16 bg-white/20 rounded-full p-10 absolute"
          from={{ rotate: "0deg", left: 280 }}
          animate={{ rotate: "160deg", left: -20 }}
          transition={{ duration: 1000, type: "timing", delay: 100 }}
        >
          <View className="bg-white/30 p-8 rounded-full">
            <Image
              className="w-28 h-28"
              source={require("./../../assets/food.png")}
            />
          </View>
        </MotiView>
      </View>
      <View className="px-8 top-36 ">
        {introText.map((text, index) => (
          <Animated.Text
            key={index}
            entering={FlipInXUp.duration(400).delay(index * 200)}
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
