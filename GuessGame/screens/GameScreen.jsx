import { View, Text } from "react-native";
import React, { useState } from "react";
import Title from "../app/components/Title";
export default function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGeuess] = useState(initialGuess);
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  return (
    <View className="mt-10">
      <Title>Opponent's Guess</Title>

      {/* Guess */}
      <View>
        <Text>Higher Or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}
