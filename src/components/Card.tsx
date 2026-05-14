import Colors from "@/constants/colors";
import { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default function Card({ children }: { children: ReactNode }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary700,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
