import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffe", key: 1 },
    { text: "go to work", key: 2 },
    { text: "go home", key: 3 },
  ]);

  const deleteTodos = (id: number) => {
    setTodos(todos.filter((todo: ObjectType) => todo.key != id));
  };

  return (
    <View style={styles.container}>
      <Header />
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  todos: {
    textAlign: "center",
    marginTop: 10,
  },

  todosWrapper: {
    marginTop: 40,
    width: 300,
    margin: 50,
  },
});
