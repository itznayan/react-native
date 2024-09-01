import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar as nativeBar,
  useWindowDimensions,
} from "react-native";
import data from "./data/data";
import ItemList from "./components/ItemList";
import CustomButton from "./components/CustomButton";
import { useSharedValue, withTiming } from "react-native-reanimated";
export default function App() {
  const [currentIndex, setCurrentindex] = useState(0);

  const { height } = useWindowDimensions();

  //logic for btn exceed its max value
  const nextHandler = () => {
    if (data.length - 1 == currentIndex) {
      setCurrentindex(0);
    } else {
      setCurrentindex((prev) => prev + 1);
    }
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? nativeBar.currentHeight : 0,
      }}
      className="flex-1"
    >
      {data.map(
        (item, index) =>
          currentIndex == index && (
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
      <CustomButton onPress={nextHandler} buttonVal={currentIndex} />
    </View>
  );
}
