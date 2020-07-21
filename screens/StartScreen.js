import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function StartScreen({ navigation }) {
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

      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.codequarters.com/")}
      >
        <Image
          style={styles.codeQuarters}
          source={require("../assets/codequarters.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>GİRİŞ YAP</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Register")}
      >
        <View style={styles.registerButton}>
          <Text style={styles.registerText}>KAYIT OL</Text>
        </View>
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
  logoContainer: {
    position: "absolute",
    top: 200,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "darkorchid",
    alignItems: "center",
    paddingHorizontal: 150,
  },
  loginText: {
    color: "lavender",
    fontFamily: "sans-serif",
    fontSize: 20,
    top: 18,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "indigo",
    alignItems: "center",
    paddingHorizontal: 153,
  },
  registerText: {
    color: "thistle",
    fontFamily: "sans-serif",
    fontSize: 20,
    top: 15,
  },
});

export default StartScreen;
