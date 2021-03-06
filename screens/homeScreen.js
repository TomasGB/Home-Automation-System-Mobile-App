import React, { useState, useEffect } from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
} from "react-native";
import * as firebase from "firebase";
import { loggingOut } from "../API/methods";
import { Ionicons } from "@expo/vector-icons";

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

    const [modalVisible, setModalVisible] = useState(false);

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
                <TouchableOpacity
                    style={{
                        justifyContent: "flex-start",
                        fontSize: 18,
                        alignSelf: "center",
                        marginRight: 15,
                    }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <Ionicons name="md-menu-outline" size={35} color="#000" />
                </TouchableOpacity>
                <Text
                    style={{
                        justifyContent: "flex-start",
                        fontSize: 18,
                        alignSelf: "center",
                    }}>
                    Hi {Name}
                </Text>
            </View>
            <Text
                style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 25,
                }}>
                HomeScreen
            </Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log("Modal has been closed.");
                }}>
                <View
                    style={{
                        width: "100%",
                        height: "80%",
                        backgroundColor: "red",
                        marginTop: "40%",
                        padding: 25,
                    }}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={{ alignSelf: "flex-end" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Ionicons name="close-outline" size={32} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
