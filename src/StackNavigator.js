import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import NoteAdd from "./NoteAdd";
import Header from "../components/Header";
import Detail from "./Detail";
import Dashboard from "./Dashboard";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    // <Stack.Navigator>
    //   {user ? (
    //     <>
    //       <Stack.Screen
    //         name="Dashboard"
    //         component={Dashboard}
    //         options={{
    //           headerTitle: () => <Header name="Account Page" />,
    //           headerStyle: {
    //             backgroundColor: "#FA26A0",
    //             height: 120,
    //             borderBottomLeftRadius: 50,
    //             borderBottomRightRadius: 50,
    //             shadowColor: "#000",
    //             elevation: 25,
    //           },
    //         }}
    //       />
    //       <Stack.Screen
    //         component={Home}
    //         name="Home"
    //         options={{
    //           headerTitle: () => <Header name="Notes" />,
    //           headerStyle: {
    //             backgroundColor: "#FA26A0",
    //             height: 120,
    //             borderBottomLeftRadius: 50,
    //             borderBottomRightRadius: 50,
    //             shadowColor: "#000",
    //             elevation: 25,
    //           },
    //         }}
    //       />
    //       <Stack.Screen
    //         component={NoteAdd}
    //         name="NoteAdd"
    //         options={{
    //           headerTitle: () => <Header name="Add Notes" />,
    //           headerStyle: {
    //             backgroundColor: "#FA26A0",
    //             height: 120,
    //             borderBottomLeftRadius: 50,
    //             borderBottomRightRadius: 50,
    //             shadowColor: "#000",
    //             elevation: 25,
    //           },
    //         }}
    //       />
    //       <Stack.Screen
    //         component={Detail}
    //         name="Detail"
    //         options={{
    //           headerTitle: () => <Header name="Edit Notes" />,
    //           headerStyle: {
    //             backgroundColor: "#FA26A0",
    //             height: 120,
    //             borderBottomLeftRadius: 50,
    //             borderBottomRightRadius: 50,
    //             shadowColor: "#000",
    //             elevation: 25,
    //           },
    //         }}
    //       />
    //     </>
    //   ) : (
    //     <>
    //       <Stack.Screen
    //         name="Login"
    //         component={Login}
    //         options={{
    //           headerTitle: () => <Header name="Login Page" />,
    //           headerStyle: {
    //             backgroundColor: "#FA26A0",
    //             height: 120,
    //             borderBottomLeftRadius: 50,
    //             borderBottomRightRadius: 50,
    //             shadowColor: "#000",
    //             elevation: 25,
    //           },
    //         }}
    //       />
    //       <Stack.Screen
    //         name="Registration"
    //         component={Registration}
    //         options={{
    //           headerTitle: () => <Header name="Registration Page" />,
    //           headerStyle: {
    //             backgroundColor: "#FA26A0",
    //             height: 120,
    //             borderBottomLeftRadius: 50,
    //             borderBottomRightRadius: 50,
    //             shadowColor: "#000",
    //             elevation: 25,
    //           },
    //         }}
    //       />
    //     </>
    //   )}
    // </Stack.Navigator>

    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <Header name="Account Page" />,
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
        component={Home}
        name="Home"
        options={{
          headerTitle: () => <Header name="Notes" />,
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
        component={NoteAdd}
        name="NoteAdd"
        options={{
          headerTitle: () => <Header name="Add Notes" />,
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
        component={Detail}
        name="Detail"
        options={{
          headerTitle: () => <Header name="Edit Notes" />,
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
