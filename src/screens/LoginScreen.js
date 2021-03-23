import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Users from "../data/Users";
export default function LoginScreen({ navigation }) {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [errortext, setErrortext] = useState("");

  const handleLogin = () => {
    setErrortext("");
    // if (!userName) {
    //   alert("Please fill Username");
    //   return;
    // }
    // if (!userPassword) {
    //   alert("Please fill Password");
    //   return;
    // }

    // if (userName !== Users.username || userPassword !== Users.password) {
    //   return Alert.alert("Please check your username or password");
    // }

    navigation.navigate("Drawer");
  };
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View>
          <KeyboardAvoidingView>
            <View style={styles.ContainerImage}>
              <Image
                source={require("../imgs/logo.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Username..."
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Password..."
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleLogin}
            >
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate("Register")}
            >
              Create account
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#b3d9ff",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 0,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#ffb366",
    borderWidth: 0,
    color: "#FFFFFF",
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#4d0000",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  registerTextStyle: {
    color: "#4d0000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  ContainerImage: {
    alignItems: "center",
    paddingTop: 100,
  },
  image: {
    width: "50%",
    height: 100,
    resizeMode: "contain",
  },
});
