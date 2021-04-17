import React, { Component } from "react";
import {
  Text,
  Image,
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <Image
          source={require("../../assets/login.jpg")}
          style={{ width: "100%", height: "43%" }}
        />
        <Text
          style={{
            fontSize: 28,
            alignSelf: "center",
          }}
        >
          {" "}
          Save the World!{" "}
        </Text>

        <Text
          style={{
            marginHorizontal: 40,
            alignSelf: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Write here about page
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: "#029e9c",
            borderRadius: 23,
            paddingVertical: 3,
          }}
        >
          <Icon name="mail" color="#029e9c" size={24} />
          <TextInput
            placeholder="Mail"
            placeholderTextColor="#029e9c"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#029e9c",
            borderRadius: 23,
            paddingVertical: 3,
          }}
        >
          <Icon name="user" color="#029e9c" size={24} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#029e9c"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#029e9c",
            paddingVertical: 10,
            borderRadius: 23,
            fontWeight: "bold",
          }}
        >
          <Text
            onPress={() => navigate("Main")}
            style={{
              color: "white",
            }}
          >
            Already a Member
          </Text>
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#029e9c",
            fontWeight: "bold",
            paddingVertical: 30,
          }}
        >
          New User!
        </Text>
      </View>
    );
  }
}
