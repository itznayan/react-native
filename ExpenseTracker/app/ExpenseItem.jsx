import { Pressable, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ id, description, amount, date }) {
  const nav = useNavigation();
  const onPressHandler = () => {
    nav.navigate("ManageExpense", { expenseId: id });
  };

  return (
    <Pressable onPress={onPressHandler} className="active:opacity-75">
      <View
        style={{ elevation: 4 }}
        className="flex flex-row bg-white justify-between py-2  mx-6 mb-3 rounded-xl px-4"
      >
        <View>
          <Text className="text-xl ">{description}</Text>
          <Text className="px-1">{date}</Text>
        </View>
        <View className="bg-black  px-2 rounded-xl flex justify-center items-center">
          <Text className="text-xl  text-white">${amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
