import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { signIn } from "../API/methods";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email) {
            Alert.alert("Email field is required.");
        }

        if (!password) {
            Alert.alert("Password field is required.");
        }

        signIn(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf: "center",
                }}>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 34,
                        fontWeight: "bold",
                        color: "#0B73F8",
                        marginBottom: 30,
                    }}>
                    Login
                </Text>
                <TextInput
                    style={{
                        padding: 5,
                        marginBottom: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#cccccc",
                        color: "#000",
                    }}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={{
                        padding: 5,
                        marginBottom: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: "#cccccc",
                        color: "#000",
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
                <View
                    style={{
                        padding: 5,
                        marginTop: 25,
                        color: "#000",
                    }}>
                    <Button title="Login" onPress={handleLogin}></Button>
                </View>
                <View
                    style={{
                        marginTop: 25,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}>
                    <Text>Don't have an acount yet?</Text>
                    <TouchableOpacity
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 70,
                        }}
                        onPress={() => {
                            navigation.navigate("SignUp");
                        }}>
                        <Text style={{ fontWeight: "bold", color: "blue" }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    inputBox: {
        width: "85%",
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: "#d3d3d3",
        borderBottomWidth: 1,
        textAlign: "center",
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: "#F6820D",
        borderColor: "#F6820D",
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    buttonSignup: {
        fontSize: 12,
    },
});
