import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { loggingOut } from "../API/methods";

export default function HomeScreen({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [Name, setName] = useState("");

    useEffect(() => {
        async function getUserInfo() {
            let doc = await firebase
                .firestore()
                .collection("users")
                .doc(currentUserUID)
                .get();

            if (!doc.exists) {
                Alert.alert("No user data found!");
            } else {
                let dataObj = doc.data();
                setName(dataObj.Name);
            }
        }
        getUserInfo();
    });

    const handlelogOut = () => {
        loggingOut();
        navigation.replace("Login");
    };

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Text>Hi {Name}</Text>
            <Button title="log out" onPress={handlelogOut}></Button>
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
