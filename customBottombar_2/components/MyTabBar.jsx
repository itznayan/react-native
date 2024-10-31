import { View } from "react-native";
import TabbarButton from "./TabbarButton";
import { useState } from "react";
import Animated from "react-native-reanimated";

function MyTabBar({ state, descriptors, navigation }) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const onTabbarLayout = (e) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  return (
    <View
      onLayout={onTabbarLayout}
      style={{ elevation: 5 }}
      className="absolute flex-row items-center justify-between mx-8 py-2 bg-gray-200 rounded-full shadow bottom-4"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <>
            <TabbarButton
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? "#8B0000" : "#222"}
              label={label}
              icon={icon}
            />
          </>
        );
      })}
    </View>
  );
}

export default MyTabBar;
