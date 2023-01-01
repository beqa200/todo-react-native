import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem(props: TodoItemProps) {
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        
        <Text style={styles.item}>{props.item.text}</Text>

        <MaterialIcons
          name="delete"
          size={24}
          color="black"
          style={{marginRight: 20}}
          onPress={() => props.deleteTodos(props.item.key)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    width: 244,
  },
  wrapper: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    margin: 8
  },
});
