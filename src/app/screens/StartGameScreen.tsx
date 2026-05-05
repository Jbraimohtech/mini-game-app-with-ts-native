import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        placeholder="50"
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>

        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e0329",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },
  button: { flex: 1 },
});
