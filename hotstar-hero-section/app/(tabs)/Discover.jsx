import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Discover() {
  const router = useRouter();
  return (
    <View>
      <Text>Discover</Text>
      <Button title="Go to Post" onPress={() => router.push("Post")} />
    </View>
  );
}
