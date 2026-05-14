import Colors from "@/constants/colors";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    marginVertical: 10,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
