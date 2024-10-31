import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Home() {
  const navigation = useNavigation();
  const width = useSharedValue(10);
  const height = useSharedValue(10);
  const borderRadius = useSharedValue(10);
  const random = () => {
    const randomW = Math.random() * 300;
    const randomH = Math.random() * 300;
    const randomB = Math.random() * 300;
    width.value = withSpring(randomW);
    height.value = withSpring(randomH);
    borderRadius.value = withSpring(randomB);
  };
  const animateStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      borderRadius: borderRadius.value,
    };
  });
  return (
    <View className=" flex-1 justify-between items-center py-36">
      <Animated.View
        style={animateStyle}
        className="h-10 w-10 bg-black  "
      ></Animated.View>
      <View className="space-y-10 items-center">
        <View>
          <Button
            onPress={() => navigation.navigate("Discover")}
            title="Goto Discover"
          />
        </View>
        <View>
          <Button onPress={() => random()} title="Animate" />
        </View>
      </View>
    </View>
  );
}
