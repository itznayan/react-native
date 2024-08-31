import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

export default function Last7days({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpenseSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </View>
  );
}
