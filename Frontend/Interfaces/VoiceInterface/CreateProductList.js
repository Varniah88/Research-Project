import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { IconButton, Colors, Appbar } from "react-native-paper";

export default function CreateProductList() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter a Product"
          placeholderTextColor="#9a73ef"
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter the Quantity"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />

        <View style={styles.add}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}> ADD </Text>
          </TouchableOpacity>
          <IconButton
            icon="microphone"
            color={Colors.red500}
            size={40}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    width: 300,
    borderColor: "#029e9c",
    borderWidth: 1,
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#029e9c",
    padding: 10,
    margin: 15,
    height: 40,
    alignSelf: "center",
    borderRadius: 10,
  },
  submitButtonText: {
    color: "white",
  },

  body: {
    marginTop: 20,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },

  welcome: {
    fontSize: 30,
    color: "#02137d",
    marginTop: 20,
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
    backgroundColor: "#6bd69d",
  },
  button: {
    fontSize: 20,
    color: "#FFFF",
  },

  add: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "space-around",
  },
});
