import { View } from "react-native";
import React, { useContext, useEffect } from "react";
import Last7days from "../app/ExpenseOutput";
import { ExpensesContext } from "../context/context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
export default function RecentExpense() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    };
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <View>
      <Last7days expenses={recentExpenses} expensesPeriod="Last 7 Days" />
    </View>
  );
}
