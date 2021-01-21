import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { loggingOut } from "../API/methods";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

export default function DevicesScreen({ navigation }) {
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
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    marginTop: 50,
                    marginLeft: 15,
                }}>
                <View
                    style={{
                        justifyContent: "flex-start",
                        fontSize: 18,
                        alignSelf: "center",
                        marginRight: 15,
                    }}>
                    <Ionicons name="md-menu-outline" size={35} color="#000" />
                </View>
                <Text
                    style={{
                        justifyContent: "flex-start",
                        fontSize: 18,
                        alignSelf: "center",
                    }}>
                    Devices
                </Text>
            </View>
            <Text
                style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 25,
                }}>
                Devices Screen
            </Text>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf: "center",
                    width: 250,
                }}>
                <Button title="log out" onPress={handlelogOut}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
