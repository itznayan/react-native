import { View, Text } from "react-native";
import React, { useContext } from "react";
import Last7days from "../app/ExpenseOutput";
import { ExpensesContext } from "../context/context";

export default function AllExpense() {
  const expensesCtx = useContext(ExpensesContext);
  
  return (
    <View>
      <Last7days expenses={expensesCtx.expenses} expensesPeriod="Total" />
    </View>
  );
}
