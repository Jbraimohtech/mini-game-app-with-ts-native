import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/game-over.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{""}{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "open-sans",
  },
  guess: {
    fontSize: 20,
    fontFamily: "open-sans",
    color: "white",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
    margin: 36,
    alignSelf: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
