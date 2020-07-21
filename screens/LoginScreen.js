import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";

function LoginScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/odoo.png")} />
        <Text style={styles.text1}>Harika çalışanlar</Text>
        <Text style={styles.text2}>Harika bir yazılım hak ediyor</Text>
      </View>
      <View style={styles.loginFormContainer}>
        <TextInput
          placeholder="enter e-mail address"
          placeholderTextColor="#fff"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="enter password"
          placeholderTextColor="#fff"
          returnKeyType="go"
          autoCapitalize="none"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => alert("Successful")}
        >
          <Text style={styles.buttonText}>GİRİŞ YAP</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.codequarters.com/")}
      >
        <Image
          style={styles.codeQuarters}
          source={require("../assets/codequarters.png")}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "indigo",
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
  },
  input: {
    height: 35,
    backgroundColor: "mediumorchid",
    color: "#fff",
    marginBottom: 10,
    paddingHorizontal: 100,
  },
  loginFormContainer: {
    padding: 20,
  },
  codeQuarters: {
    width: 130,
    height: 60,
    resizeMode: "stretch",
  },
  logo: {
    width: 320,
    height: 120,
    resizeMode: "stretch",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
  },
  text1: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "sans-serif",
    top: 10,
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "sans-serif",
    top: 10,
  },
});

export default LoginScreen;
