import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({
  children,
  onPress,
}: {
  children: string;
  onPress: () => void;
}) {
  function pressHandler() {
    onPress();
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    margin: 4,
  },
  button: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    borderRadius: 28,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
