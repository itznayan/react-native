import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import AllExpense from "./screen/AllExpense";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpense from "./screen/RecentExpense";
import ManageExpense from "./screen/ManageExpense";
import Ctx from "./context/context";
export default function App() {
  const tab = createBottomTabNavigator();
  const stack = createNativeStackNavigator();
  const ExpenseOverview = ({ navigation }) => (
    <tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10 },
        tabBarActiveTintColor: "black",
        headerRight: ({ color }) => (
          <View className="px-3">
            <TouchableOpacity
              onPress={() => navigation.navigate("ManageExpense")}
            >
              <AntDesign name="pluscircle" size={26} color={color} />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <tab.Screen
        name="Recent Expenses"
        component={RecentExpense}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={24} color="black" />
          ),
        }}
      />
      <tab.Screen
        name="All Expenses"
        component={AllExpense}
        options={{
          tabBarLabel: "All Expense",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
  return (
    <View className="flex-1">
      <Ctx>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="ExpenseOverView"
              options={{ headerShown: false }}
              component={ExpenseOverview}
            />
            <stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ title: "Manage Expense", presentation: "modal" }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </Ctx>
    </View>
  );
}
