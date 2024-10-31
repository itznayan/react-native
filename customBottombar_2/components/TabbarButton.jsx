import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import icon from "../constants/icon";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabbarButton({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}) {
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(
      isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 250 }
    );
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleVal = interpolate(scale.value, [0, 1], [1, 1.5]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);
    return {
      transform: [{ scale: scaleVal }],
      top,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
      className={` items-center flex-1 `}
    >
      <Animated.View
        className={`${
          isFocused ? "bg-[#8B0000] px-2 py-2 relative rounded-full" : ""
        }`}
        style={animatedIconStyle}
      >
        {icon[routeName]({
          color: isFocused ? "#fff" : "#222",
        })}
      </Animated.View>
      <Animated.Text
        style={[{ color: isFocused ? "#E5E7EB" : "#222" }, animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
}
