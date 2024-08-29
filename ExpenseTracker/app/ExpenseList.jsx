import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  const renderItem = ({ item }) => {
    return (
      <ExpenseItem
        id={item.id}
        description={item.description}
        amount={item.amount}
        date={item.date.toLocaleDateString()}
      />
    );
  };

  return (
    <FlatList
      className="mb-40"
      data={expenses}
      keyExtractor={(expenses) => expenses.id}
      renderItem={renderItem}
    />
  );
}
