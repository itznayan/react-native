import { View, Text } from "react-native";
import React from "react";

export default function ExpenseSummary({ periodName, expenses }) {
  // Calculate the sum of all expenses
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // Adding initial value 0 to handle empty arrays

  return (
    <View className="flex mb-4 mt-2 flex-row items-center justify-between bg-gray-300 rounded-full px-4 py-3 mx-2">
      <Text className="text-lg text-gray-800">{periodName}</Text>
      <Text className="text-lg font-bold ">${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
