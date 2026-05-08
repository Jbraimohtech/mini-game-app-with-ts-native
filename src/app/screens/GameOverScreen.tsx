import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.guess}>GameOverScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  guess: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
