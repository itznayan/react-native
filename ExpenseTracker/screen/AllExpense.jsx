import { View, Text } from "react-native";
import React, { useContext } from "react";
import { context } from "../context/context";
import Last7days from "../app/ExpenseOutput";

export default function AllExpense() {
  const value = useContext(context);
  console.log(value);

  return (
    <View>
      <Last7days expensesPeriod="Total" />
    </View>
  );
}
