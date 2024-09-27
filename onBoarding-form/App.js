import React, { useRef, useState } from "react";
import { View, StatusBar as nativeBar } from "react-native";
import data from "./data/data";
import ItemList from "./components/ItemList";
import CustomButton from "./components/CustomButton";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic for handling button click
  const nextHandler = async () => {
    if (data.length - 1 === currentIndex) {
      console.log("END");
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <View className="flex-1 pt-10">
      <View className="flex-1">
        {data.map(
          (item, index) =>
            currentIndex === index && (
              <ItemList
                key={item.id}
                id={item.id}
                image={item.image}
                backgroundColor={item.backgroundColor}
                text={item.text}
                textColor={item.textColor}
              />
            )
        )}
      </View>

      <CustomButton onPress={nextHandler} buttonVal={currentIndex} />
    </View>
  );
}
