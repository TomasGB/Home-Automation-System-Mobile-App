import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { registration } from "../API/methods";

export default function SignUpScreen({ navigation }) {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const emptyState = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleSignup = () => {
        if (!Name) {
            alert("Name is required");
        } else if (!email) {
            alert("Email field is required.");
        } else if (!password) {
            alert("Password field is required.");
        } else if (!confirmPassword) {
            setPassword("");
            alert("Confirm password field is required.");
        } else if (password !== confirmPassword) {
            alert("Password does not match!");
        } else {
            registration(email, password, Name);
            navigation.navigate("Loading");
            emptyState();
        }
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: "center",
                    alignSelf: "center",
                }}>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#0B73F8",
                        marginBottom: 30,
                    }}>
                    Create a new account
                </Text>
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                    <TextInput
                        style={{
                            padding: 5,
                            marginBottom: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: "#cccccc",
                            color: "#000",
                        }}
                        placeholder="Name"
                        value={Name}
                        onChangeText={(name) => setName(name)}
                    />
                    <TextInput
                        style={{
                            padding: 5,
                            marginBottom: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: "#cccccc",
                            color: "#000",
                        }}
                        placeholder="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={{
                            padding: 5,
                            marginBottom: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: "#cccccc",
                            color: "#000",
                        }}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <TextInput
                        style={{
                            padding: 5,
                            marginBottom: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: "#cccccc",
                            color: "#000",
                        }}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(confirmPassword) =>
                            setConfirmPassword(confirmPassword)
                        }
                    />
                    <View
                        style={{
                            width: 200,
                            padding: 5,
                            marginTop: 25,
                            color: "#000",
                        }}>
                        <Button
                            title={"Sign up"}
                            onPress={handleSignup}></Button>
                    </View>
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
});
