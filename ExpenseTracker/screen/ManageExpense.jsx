import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SubButton from "../app/components/SubButton";
export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = editedExpenseId;

  const deleteExpense = () => {
    console.log("delete");
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const saveExpense = () => {
    console.log("save");
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View className="my-4">
      <View className="flex flex-row">
        <SubButton title="Cancel" onPress={cancelHandler} />
        <SubButton
          onPress={saveExpense}
          title={isEditing ? "Update" : "Add Expense"}
        />
      </View>

      <View className="border-b-2 border-black my-4"></View>
      {isEditing && (
        <View className="flex items-center">
          <Pressable
            onPress={deleteExpense}
            className="bg-red-600 px-4 py-2 rounded-xl active:opacity-80"
          >
            <AntDesign name="delete" size={40} color="white" />
          </Pressable>
        </View>
      )}
    </View>
  );
}
