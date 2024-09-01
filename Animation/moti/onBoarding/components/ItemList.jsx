import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function ItemList({
  id,
  image,
  text,
  textColor,
  backgroundColor,
}) {
  const { height, width } = useWindowDimensions();
  return (
    <View className="flex-1 ">
      <LottieView
        style={{ height, width, backgroundColor }}
        source={image}
        autoPlay
        loop
      />
      <Text
        style={{ color: textColor }}
        className="text-4xl mx-6 text-center font-bold  absolute mt-[600]"
      >
        {text}
      </Text>
    </View>
  );
}
