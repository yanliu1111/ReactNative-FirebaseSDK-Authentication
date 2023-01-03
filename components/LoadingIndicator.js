import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

function LoadingIndicator() {
  return (
    <View>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
}

export default LoadingIndicator;
