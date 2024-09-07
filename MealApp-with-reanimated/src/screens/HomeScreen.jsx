import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const navigate = useNavigation();
  return (
    <View className="justify-center items-center flex-1">
      <Text className="text-4xl font-bold ">HomeScreen</Text>
    </View>
  );
}
