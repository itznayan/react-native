import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      {visible && (
        <Animated.Text
          entering={FadeInDown.duration(600)}
          exiting={FadeOutDown.duration(400)}
          className="text-3xl font-bold"
        >
          Open up App.js to start working on your app!
        </Animated.Text>
      )}
      <Button title="Toggle Visibility" onPress={() => setVisible(!visible)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
