import { View, Text, Pressable, TextInput } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SubButton from "../app/components/SubButton";
import { ExpensesContext } from "../context/context";
import ExpenseForm from "../app/ManageExpense/ExpenseForm";
export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = editedExpenseId;

  const deleteExpense = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const saveExpense = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Say Update",
        amount: 10,
        date: new Date("2024-08-29"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Say Add",
        amount: 10,
        date: new Date("2024-08-29"),
      });
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View className="my-4">
      <ExpenseForm />
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
