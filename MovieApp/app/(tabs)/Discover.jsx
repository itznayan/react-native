import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Discover() {
  const router = useRouter();
  return (
    <View>
      <StatusBar style="dark" backgroundColor="#000" />
      <Text className="bg-black text-4xl text-white tracking-widest">
        Discover
      </Text>
      <Button title="Go to Post" onPress={() => router.push("Post")} />
    </View>
  );
}
