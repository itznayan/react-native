import { ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient className="flex-1" colors={["#4e0829", "#ddb52f"]}>
      <ImageBackground
        className="w-full h-full"
        imageStyle={{ opacity: 0.15 }}
        source={{
          uri: "https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/extra-files/images/background.png?raw=true",
        }}
        resizeMode="cover"
      >
        <SafeAreaView className="p-3">{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
