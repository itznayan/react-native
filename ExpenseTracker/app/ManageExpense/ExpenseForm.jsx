import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import DesInput from "../components/DesInput";
import SubButton from "../components/SubButton";
import { getFormattedDate } from "../../util/date";

export default function ExpenseForm({
  onCancel,
  isEditing,
  defaultValue,
  onSubmit,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => ({
      ...curInputs,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const validAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!validAmount || !dateIsValid || !descriptionIsValid) {
      setInputs((curInputs) => ({
        amount: { value: curInputs.amount.value, isValid: validAmount },
        date: { value: curInputs.date.value, isValid: dateIsValid },
        description: {
          value: curInputs.description.value,
          isValid: descriptionIsValid,
        },
      }));
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View className="mb-4">
      <Text className="text-center text-3xl font-bold mb-4">Your Expense</Text>
      <View className="flex flex-row justify-between">
        <Input
          label="Amount"
          isInvalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          isInvalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <DesInput
        label="Description"
        isInvalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text
          className="text-xl px-12 mt-4"
          style={{ color: "red", marginBottom: 10 }}
        >
          Invalid input values, please correct the errors.
        </Text>
      )}
      <View className="flex flex-row mt-10">
        <SubButton title="Cancel" onPress={onCancel} />
        <SubButton onPress={submitHandler} title={isEditing} />
      </View>
    </View>
  );
}
