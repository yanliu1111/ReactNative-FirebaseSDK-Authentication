import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setName(documentSnapshot.data());
        } else {
          alert("User does not exist.");
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Hello, {name.firstName}{" "}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Entypo name="home" size={45} color="#2FF3E0" />
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#2FF3E0" }}>
          My Home Page
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => firebase.auth().signOut()}
        style={styles.button}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  button: {
    backgroundColor: "#FA26A0",
    width: 250,
    height: 70,
    marginTop: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
