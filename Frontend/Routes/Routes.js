import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeUI from "../Interfaces/MainInterface/WelcomeUI";
import Menu from "../Interfaces/MainInterface/Menu";
import CaptureImage from "../Interfaces/OCRInterface/CaptureImage";
import OCRScreen from "../Interfaces/OCRInterface/OCRScreen";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={WelcomeUI} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Capture product list" component={CaptureImage} />
        <Stack.Screen name="OCRScreen" component={OCRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
