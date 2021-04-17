import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Interfaces/LoginInterface/Login";
import Register from "../Interfaces/LoginInterface/Register";
import WelcomeUI from "../Interfaces/MainInterface/WelcomeUI";
import Menu from "../Interfaces/MainInterface/Menu";
import CaptureImage from "../Interfaces/OCRInterface/CaptureImage";
import OCRScreen from "../Interfaces/OCRInterface/OCRScreen";
import CreateProductList from "../Interfaces/VoiceInterface/CreateProductList";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={WelcomeUI} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen
          name="Create Product List"
          component={CreateProductList}
        />
        <Stack.Screen name="Product List" component={CaptureImage} />
        <Stack.Screen name="Capture Product List" component={OCRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
