import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddTodo(props: AddTodoProps) {
  const [task, setTask] = useState<string>("");
  const addTodo = (val: string) => {
    setTask(val);
  };

  const submit = (text: string | undefined) => {
    const copiedTodos = [...props.todos, { text: text, key: Math.random() }];
    props.setTodos(copiedTodos);
  };

  return (
    <View>
      <TextInput
        value={task}
        onChangeText={(val) => addTodo(val)}
        style={styles.input}
        placeholder="add todo..."
      />
      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => {
            if (task.length > 0) {
              submit(task);
            }

            setTask("");
          }}
          title="Add Todo"
          color="coral"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 50,
    marginTop: 20,
    height: 35,
    width: 300,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  button: {
    width: 300,
    marginLeft: 50,
    marginTop: 20,
  },
});
