import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Block,
} from "react-native";
import { IconButton, Colors } from "react-native-paper";

function CaptureImage({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/bg.png")}
    >
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View>
        <Text style={styles.description}>Search Product List here!</Text>
      </View>

      <IconButton
        style={styles.camera}
        icon="camera"
        color={Colors.white}
        size={50}
        onPress={() => navigation.navigate("Capture Product List")}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: "center",
    position: "absolute",
    marginTop: 100,
  },
  description: {
    fontSize: 26,
    color: "white",
    marginTop: 300,
    textAlign: "center",
  },
  mic: {
    position: "absolute",
    top: 700,
    left: 150,
  },
  camera: {
    position: "absolute",
    top: 450,
    left: 150,
  },
});
export default CaptureImage;
