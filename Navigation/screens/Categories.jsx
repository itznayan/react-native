import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "./../data/data";
import CategoryGridTitle from "../Components/CategoryGridTitle";
export default function Categories({ navigation }) {
  const renderCategory = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealOverview", { categoriesId: itemData.item.id });
    };
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
}
