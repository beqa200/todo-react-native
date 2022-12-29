import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "coral",
    paddingTop: 38,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    paddingTop: 15,
    fontWeight: "bold",
    letterSpacing: 4,
  },
});
