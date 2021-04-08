import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeUI from "./Interfaces/MainInterface/WelcomeUI";

export default function App() {
  console.log("App Executed");
  return (
    <View style={styles.container}>
      <WelcomeUI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
