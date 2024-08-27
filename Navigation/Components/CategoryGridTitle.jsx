import { View, Text, Pressable, Platform } from "react-native";

export default function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View
      style={{ elevation: 8, backgroundColor: color }}
      className={`flex-1 border ${
        Platform.OS == "ios" ? "shadow" : " "
      } overflow-hidden m-4 h-40 rounded-3xl`}
    >
      <Pressable
        onPress={onPress}
        className="flex-1"
        android_ripple={{ color: "#ccc" }}
      >
        <View className="flex-1 items-center justify-center p-4">
          <Text className="text-lg font-bold">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
