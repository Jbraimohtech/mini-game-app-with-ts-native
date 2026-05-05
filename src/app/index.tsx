import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

function MainGameScreen() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#680436", "#ddb52f"]}>
      <ImageBackground
        source={require("../../assets/images/dices-background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

export default MainGameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
