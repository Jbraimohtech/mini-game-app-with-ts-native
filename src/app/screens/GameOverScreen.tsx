import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
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
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../../../assets/images/game-over.jpg")}
            style={{ ...styles.image, width: imageSize, height: imageSize }}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{""}{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

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
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 150 : 300,
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
