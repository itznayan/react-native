import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const handleName = (text) => {
    setName(text);
  };

  const handleDetail = (text) => {
    setDetail(text);
  };

  const handleTask = () => {
    if (name.trim() && detail.trim()) {
      setTask([...task, { id: Date.now().toString(), name, detail }]);
      setName("");
      setDetail("");
    }
  };

  const deleteTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View className="flex-row justify-between items-center border-b border-gray-300 p-2">
      <View>
        <Text className="text-lg font-bold">{item.name}</Text>
        <Text>{item.detail}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteTask(item.id)}
        className="bg-red-500 p-1 rounded"
      >
        <Text className="text-white">Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 mt-14 px-4">
      <Text className="text-2xl text-center">Task Setter</Text>
      <View>
        <Text className="text-xl px-1">Enter Task Name</Text>
        <TextInput
          value={name}
          className="border px-2 bg-gray-200 rounded-2xl"
          onChangeText={handleName}
        />
      </View>

      <View>
        <Text className="text-xl px-1">Enter Task Detail</Text>
        <TextInput
          value={detail}
          className="border px-2 bg-gray-200 rounded-2xl"
          onChangeText={handleDetail}
        />
      </View>
      <TouchableOpacity
        onPress={handleTask}
        className="bg-blue-300 w-1/2 mt-4 border-blue-600 border-2 rounded-3xl"
      >
        <Text className="text-2xl text-center">Submit Task</Text>
      </TouchableOpacity>

      <View className="border-b-2 py-4">
        <Text className="text-2xl">You Got {task.length} Tasks!</Text>
      </View>
      <FlatList
        data={task}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
