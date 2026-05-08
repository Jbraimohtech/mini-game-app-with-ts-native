import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function InstructionText({ children, style }) {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
