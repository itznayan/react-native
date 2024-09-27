import { View, Text, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Animated, { FadeInRight, FadeOutDown } from "react-native-reanimated";

export default function Discover() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  return (
    <View className="flex-1 justify-between py-40 items-center">
      {isVisible && (
        <Animated.Text
          entering={FadeInRight.springify()}
          exiting={FadeOutDown.duration(200)}
          className="text-4xl font-bold"
        >
          Discover
        </Animated.Text>
      )}
      <View className="absolute mt-96">
        <Pressable
          className="bg-black active:bg-black/90 px-4 py-1 rounded-full"
          onPress={() => setIsVisible(!isVisible)}
        >
          <Text className="text-3xl text-white">
            {isVisible ? "Hide Text" : "Show Text"}
          </Text>
        </Pressable>
        <Button title="Go to Post" onPress={() => router.push("Post")} />
      </View>
    </View>
  );
}
