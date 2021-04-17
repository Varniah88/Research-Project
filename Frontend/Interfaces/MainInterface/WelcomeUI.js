import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { IconButton, Colors } from "react-native-paper";

export default function WelcomeUI({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>JOHN DOE</Text>
          <Text style={styles.welcome}>WELCOME USER!</Text>
          <Text style={styles.description}>Choose a Language to continue</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.button}>ENGLISH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.button}>TAMIL</Text>
          </TouchableOpacity>
          <IconButton
            style={styles.mic}
            icon="microphone"
            color={Colors.red500}
            size={50}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00716F",
    height: 130,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 50,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  welcome: {
    fontSize: 30,
    color: "#02137d",
    marginTop: 50,
  },
  description: {
    fontSize: 26,
    color: "#030f54",
    marginTop: 30,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 30,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#00716F",
  },
  button: {
    fontSize: 24,
    color: "#FFFF",
  },
  mic: {
    paddingTop: 15,
  },
});
