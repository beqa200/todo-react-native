import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TodoItem(props: TodoItemProps) {
  return (
    <TouchableOpacity onPress={() => props.deleteTodos(props.item.key)}>
      <Text style={styles.item}>{props.item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
