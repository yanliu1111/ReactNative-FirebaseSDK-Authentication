import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import * as Google from "expo-auth-session/providers/google";
import * as webBrowser from "expo-web-browser";

webBrowser.maybeCompleteAuthSession();

const GoogleSignIn = () => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "375292427580-h4ivhegpclf4b23tf2d2f5ano1ejb09o.apps.googleusercontent.com",
    expoClientId:
      "375292427580-fm0biv9ddkqulcq1rs8t9n41g5lgc082.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    setUserInfo(await userInfoResponse.json());
    // userInfoResponse.json().then((data) => {
    //     setUserInfo(data);
    // });
    console.log(userInfo);
  }

  showUserInfo = () => {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text style={styles.text}>Welcome {userInfo.name}</Text>
          <Text style={styles.text}>Login Email: {userInfo.email}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {showUserInfo()}
      <Button
        title={accessToken ? "Get User Data" : "Login"}
        onPress={
          accessToken
            ? getUserData
            : () => {
                promptAsync({ showInRecents: true });
              }
        }
      />
    </View>
  );
};

export default GoogleSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
  },
});
