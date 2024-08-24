import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "./../data/data";
import CategoryGridTitle from "../Components/CategoryGridTitle";
export default function Categories() {
  const renderCategory = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
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
