import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import * as firebase from "firebase";

export default function LoadingScreen({ navigation }) {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.replace("Home");
            } else {
                navigation.replace("Login");
            }
        });
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
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
