import { TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MotiView } from "moti";

export default function CustomButton({ onPress, buttonVal }) {
  // State to manage expanded state
  const [isExpanded, setIsExpanded] = useState(false);

  // Effect to handle changes in buttonVal
  useEffect(() => {
    setIsExpanded(buttonVal === 2);
  }, [buttonVal]);

  return (
    <View className="flex justify-center items-center">
      <TouchableOpacity onPress={onPress}>
        <MotiView
          className="bg-black items-center mb-10 justify-center rounded-full"
          from={{ width: 80, height: 80 }}
          animate={{ width: isExpanded ? 200 : 80, height: 80 }}
          transition={{
            type: "timing",
            duration: 300,
          }}
        >
          <AntDesign name="arrowright" size={34} color="white" />
        </MotiView>
      </TouchableOpacity>
    </View>
  );
}
