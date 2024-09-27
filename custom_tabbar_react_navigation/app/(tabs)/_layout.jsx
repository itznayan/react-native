import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/MyTabBar";

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Discover" />
      <Tabs.Screen name="Post" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}
