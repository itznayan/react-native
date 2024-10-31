import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/MyTabBar";
import CustomNavBar from "../../components/CustomNavBar";
export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <CustomNavBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics" }} />
    </Tabs>
  );
}
