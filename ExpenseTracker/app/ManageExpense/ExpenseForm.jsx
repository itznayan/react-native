import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import DesInput from "../components/DesInput";

export default function ExpenseForm() {
  const [inputVal, setInputVal] = useState({
    amount: "",
    description: "",
    date: "",
  });
  const amountChangeHandler = (inputIdentifier, amount) => {
    setInputVal((curInputVal) => {
      return {
        ...curInputVal,
        [inputIdentifier]: amount,
      };
    });
  };
  return (
    <View className="mb-4">
      <Text className="text-center text-3xl font-bold mb-4">Your Expense</Text>
      <View className="flex flex-row  justify-between">
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
            value: amount,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "DD/MM/YYYY",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <DesInput
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "none",
        }}
      />
    </View>
  );
}
