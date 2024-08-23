import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../app/components/PrimaryButton";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber < 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Number Has To Between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }

    onPickNumber(choosenNumber);
  };
  return (
    <View
      style={{ elevation: 20 }}
      className="flex justify-center items-center mx-6 rounded-lg p-4 mt-32 bg-pink-800"
    >
      <TextInput
        value={enteredNumber}
        onChangeText={numberInputHandler}
        maxLength={2}
        className=" bg-pink-800 text-white  p-2 mb-4 text-2xl h-12 w-16 border-[#ddb52f] border-b-4 px-4  text-center font-bold"
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View className="flex flex-row  gap-4">
        <View className="flex-1">
          <PrimaryButton onPress={resetInputHandler} title="Reset" />
        </View>
        <View className="flex-1">
          <PrimaryButton onPress={confirmInputHandler} title="Confirm" />
        </View>
      </View>
    </View>
  );
}
