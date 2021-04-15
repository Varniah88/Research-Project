import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { IconButton, Colors, Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.welcome}>WHERE YOU NEED TO GO!</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>VOICE SERACH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>PRODUCT LIST SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>IMAGE SERACH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>ORDERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>LIGHT NOW ASSISTANT</Text>
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
    backgroundColor: "#b01280",
    height: 80,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 0,
  },

  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  bck: {
    alignSelf: "flex-start",
  },
  back: {
    fontSize: 20,
    color: "#696969",
    fontWeight: "600",
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: -15,
    paddingLeft: 35,
  },
  backarw: {
    marginTop: -19,
  },
  welcome: {
    fontSize: 30,
    color: "#00BFFF",
    marginTop: 50,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 15,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#b01280",
  },
  button: {
    fontSize: 20,
    color: "#FFFF",
  },
  mic: {
    paddingTop: 15,
  },
});
