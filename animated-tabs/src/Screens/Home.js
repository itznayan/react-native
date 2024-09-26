import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, { FadeInRight, FadeOutDown } from "react-native-reanimated";
import { LinearTransition } from "react-native-reanimated";
import { MotiView } from "moti";

export default function Home() {
  const buttons = [
    { name: "Home", icon: <Entypo name="home" size={24} color="black" /> },
    {
      name: "Notification",
      icon: <Entypo name="notification" size={24} color="black" />,
    },
    { name: "Like", icon: <AntDesign name="like1" size={24} color="black" /> },
    {
      name: "Dislike",
      icon: <AntDesign name="dislike1" size={24} color="black" />,
    },
    {
      name: "Explore",
      icon: <AntDesign name="find" size={24} color="black" />,
    },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <View className="flex-1 flex-row justify-center mx-10 items-center">
      {buttons.map((item, index) => {
        const isSelected = index === selected;

        return (
          <MotiView
            className="mx-1 rounded-md"
            animate={{ backgroundColor: isSelected ? "#60A5FA" : "#D4D4D8" }}
            layout={LinearTransition.springify()}
            key={index}
            transition={{ delay: 100 }}
          >
            <Pressable
              className={`flex flex-row p-2   items-center`}
              onPress={() => setSelected(index)}
            >
              <View className="mx-1">{item.icon}</View>

              {isSelected && (
                <Animated.Text
                  className="font-medium"
                  entering={FadeInRight.delay(50)}
                  exiting={FadeOutDown.springify()}
                >
                  {item.name}
                </Animated.Text>
              )}
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
}
