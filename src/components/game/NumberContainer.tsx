import Colors from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NumberContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
