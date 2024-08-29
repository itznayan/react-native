import { View, Text } from "react-native";
import React from "react";
import Last7days from "../app/ExpenseOutput";
export default function RecentExpense() {
  return (
    <View>
      <Last7days expensesPeriod="Last 7 Days" />
    </View>
  );
}
