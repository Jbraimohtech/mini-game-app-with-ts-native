import { Platform, StyleSheet, Text, View } from "react-native";

export default function Title({ children }: { children: string }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: "#fff",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
