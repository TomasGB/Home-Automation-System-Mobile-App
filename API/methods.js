import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(email, password, Name) {
    try {
        const response = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid);
        const user = {
            uid: currentUser.uid,
            Name: Name,
            Email: email,
            Password: password,
        };
        console.log("antes de db");
        const db = firebase.firestore();

        db.collection("users").doc(currentUser.uid).set(user);
        console.log(`${Name} has been registered.`);
        console.log("antes de db");
    } catch (err) {
        Alert.alert("Something went wrong!", err.message);
        console.log(err.message);
    }
}

export async function signIn(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
        Alert.alert("Something went wrong!", err.message);
    }
}

export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert("Something went wrong!", err.message);
    }
}
