import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "./config";
import Login from "./src/Login";
import Registration from "./src/Registration";
import Header from "./components/Header";

import StackNavigator from "./src/StackNavigator";

const Stack = createStackNavigator();

export function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: () => <Header name="Login Page" />,
              headerStyle: {
                backgroundColor: "#FA26A0",
                height: 120,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                shadowColor: "#000",
                elevation: 25,
              },
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerTitle: () => <Header name="Registration Page" />,
              headerStyle: {
                backgroundColor: "#FA26A0",
                height: 120,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                shadowColor: "#000",
                elevation: 25,
              },
            }}
          />
        </>
      </Stack.Navigator>
    );
  }

  return <StackNavigator />;
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
