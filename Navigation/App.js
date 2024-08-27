import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Categories from "./screens/Categories";
import { StatusBar as Status } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverview from "./screens/MealOverview";
import MealDetail from "./screens/MealDetail";
export default function App() {
  const safearea = Status.currentHeight;
  const stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, paddingTop: Platform.OS == "android" ? safearea : 0 }}
      >
        <StatusBar style="light" />

        <NavigationContainer>
          <stack.Navigator
            initialRouteName="MealCategory"
            screenOptions={{
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#023020" },
            }}
          >
            <stack.Screen
              name="MealCategory"
              component={Categories}
              options={{
                title: "All Categories",
              }}
            />
            <stack.Screen name="MealOverview" component={MealOverview} />
            <stack.Screen name="MealDetails" component={MealDetail} />
          </stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
