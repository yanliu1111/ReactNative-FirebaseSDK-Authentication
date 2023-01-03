import React from "react";
import { View, Text } from "react-native";

function ErrorMessage({ error }) {
  return (
    <View>
      <Text>An error occurred: {error.message}</Text>
    </View>
  );
}

export default ErrorMessage;
