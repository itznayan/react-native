import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Discover" />
      <Tabs.Screen name="Post" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}
