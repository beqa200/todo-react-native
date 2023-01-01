import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodos = (id: number) => {
    setTodos(todos.filter((todo: ObjectType) => todo.key != id));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo todos={todos} setTodos={setTodos} />
          <View style={styles.todosWrapper}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteTodos={deleteTodos} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  todos: {
    textAlign: "center",
    marginTop: 10,
  },

  todosWrapper: {
    marginTop: 40,
    height: 500,
  },

  content: {
    flex: 1,
    alignItems: "center"

  },
});
