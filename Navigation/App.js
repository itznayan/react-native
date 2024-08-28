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
import Entypo from "@expo/vector-icons/Entypo";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteItem from "./screens/FavouriteItem";
import FavouriteContextProvider from "./store/context/Context";
export default function App() {
  const safearea = Status.currentHeight;
  const stack = createNativeStackNavigator();
  const drawer = createDrawerNavigator();

  const DrawerNavigation = () => {
    return (
      <drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#023020" },
          drawerActiveBackgroundColor: "#ccc",
          drawerContentStyle: {
            backgroundColor: "white",
          },
          drawerActiveTintColor: "black",
        }}
      >
        <drawer.Screen
          name="Home"
          component={Categories}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <drawer.Screen
          name="Favourite"
          component={FavouriteItem}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="star" size={size} color={color} />
            ),
          }}
        />
      </drawer.Navigator>
    );
  };
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, paddingTop: Platform.OS == "android" ? safearea : 0 }}
      >
        <StatusBar style="light" />
        <FavouriteContextProvider>
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
                options={{ headerShown: false }}
                component={DrawerNavigation}
              />
              <stack.Screen name="MealOverview" component={MealOverview} />
              <stack.Screen name="MealDetails" component={MealDetail} />
            </stack.Navigator>
          </NavigationContainer>
        </FavouriteContextProvider>
      </SafeAreaView>
    </>
  );
}
