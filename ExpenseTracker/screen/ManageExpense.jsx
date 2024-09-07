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

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  const deleteExpense = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const saveExpense = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
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
      <ExpenseForm
        onCancel={cancelHandler}
        isEditing={isEditing ? "Update" : "Add"}
        onSubmit={saveExpense}
        defaultValue={selectedExpense}
      />

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
