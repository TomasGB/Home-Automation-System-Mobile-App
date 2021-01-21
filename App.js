import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import LoginScreen from "./screens/loginScreen";
import SignUpScreen from "./screens/signupScreen";
import LoadingScreen from "./screens/loadingScreen";
import HomeScreen from "./screens/homeScreen";
import DevicesScreen from "./screens/devicesScreen";

const Stack = createStackNavigator();

export default function App() {
    if (!firebase.apps.length) {
        console.log("Connected with Firebase");
        firebase.initializeApp(apiKeys.firebaseConfig);
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Loading"}
                    component={LoadingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Devices"
                    component={DevicesScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
