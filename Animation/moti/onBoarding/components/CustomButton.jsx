import { TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MotiView } from "moti";

export default function CustomButton({ onPress, buttonVal, className }) {
  // State to manage expanded state
  const [isExpanded, setIsExpanded] = useState(false);

  // Effect to handle changes in buttonVal
  useEffect(() => {
    setIsExpanded(buttonVal === 2);
  }, [buttonVal]);

  return (
    <View className={`${className} items-center `}>
      <TouchableOpacity onPress={onPress}>
        <MotiView
          className="items-center justify-center mb-6 bg-black rounded-full"
          from={{ width: 120, height: 120 }}
          animate={{
            width: isExpanded ? 250 : 120,
            height: isExpanded ? 80 : 120,
          }}
          transition={{
            type: "spring",
            duration: 1400,
          }}
        >
          <AntDesign name="arrowright" size={34} color="white" />
        </MotiView>
      </TouchableOpacity>
    </View>
  );
}
