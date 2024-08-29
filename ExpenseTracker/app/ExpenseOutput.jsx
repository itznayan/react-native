import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

export default function Last7days({ expenses, expensesPeriod }) {
  const Dummy = [
    {
      id: "e1",
      description: "Grocery Shopping",
      amount: 42.75,
      date: new Date("2024-01-01"),
    },
    {
      id: "e2",
      description: "Gym Membership",
      amount: 29.99,
      date: new Date("2024-01-03"),
    },
    {
      id: "e3",
      description: "Movie Tickets",
      amount: 15.5,
      date: new Date("2024-01-05"),
    },
    {
      id: "e4",
      description: "Dinner at Restaurant",
      amount: 78.99,
      date: new Date("2024-01-07"),
    },
    {
      id: "e5",
      description: "Online Course",
      amount: 199.99,
      date: new Date("2024-01-10"),
    },
    {
      id: "e6",
      description: "New Shoes",
      amount: 89.5,
      date: new Date("2024-01-12"),
    },
    {
      id: "e7",
      description: "Coffee with Friends",
      amount: 14.25,
      date: new Date("2024-01-14"),
    },
    {
      id: "e8",
      description: "Uber Ride",
      amount: 22.45,
      date: new Date("2024-01-16"),
    },
    {
      id: "e9",
      description: "Electricity Bill",
      amount: 120.0,
      date: new Date("2024-01-18"),
    },
    {
      id: "e10",
      description: "Gadgets Purchase",
      amount: 349.99,
      date: new Date("2024-01-20"),
    },
    {
      id: "e11",
      description: "Books",
      amount: 48.5,
      date: new Date("2024-01-22"),
    },
    {
      id: "e12",
      description: "Monthly Subscription",
      amount: 9.99,
      date: new Date("2024-01-25"),
    },
    {
      id: "e13",
      description: "Concert Tickets",
      amount: 150.0,
      date: new Date("2024-01-27"),
    },
    {
      id: "e14",
      description: "New Jacket",
      amount: 65.0,
      date: new Date("2024-01-28"),
    },
    {
      id: "e15",
      description: "Pet Supplies",
      amount: 37.75,
      date: new Date("2024-01-29"),
    },
    // Last 7 days expenses
    {
      id: "e16",
      description: "Groceries",
      amount: 63.45,
      date: new Date("2024-08-22"),
    },
    {
      id: "e17",
      description: "Fuel",
      amount: 45.0,
      date: new Date("2024-08-23"),
    },
    {
      id: "e18",
      description: "Lunch with Colleagues",
      amount: 28.99,
      date: new Date("2024-08-24"),
    },
    {
      id: "e19",
      description: "Pharmacy",
      amount: 14.5,
      date: new Date("2024-08-25"),
    },
    {
      id: "e20",
      description: "Streaming Service",
      amount: 12.99,
      date: new Date("2024-08-26"),
    },
    {
      id: "e21",
      description: "Snack Shopping",
      amount: 7.5,
      date: new Date("2024-08-27"),
    },
    {
      id: "e22",
      description: "Gas Bill",
      amount: 35.0,
      date: new Date("2024-08-28"),
    },
    {
      id: "e23",
      description: "Dinner Takeout",
      amount: 24.0,
      date: new Date("2024-08-29"),
    },
    {
      id: "e24",
      description: "Movie Rental",
      amount: 4.99,
      date: new Date("2024-08-30"),
    },
    {
      id: "e25",
      description: "Weekend Trip",
      amount: 120.0,
      date: new Date("2024-08-31"),
    },
  ];

  return (
    <View>
      <ExpenseSummary periodName={expensesPeriod} expenses={Dummy} />
      <ExpenseList expenses={Dummy} />
    </View>
  );
}
