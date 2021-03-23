import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View style={styles.ContainerImage}>
          <Image source={require("../imgs/logo.png")} style={styles.image} />
        </View>
        <KeyboardAvoidingView>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your usernname"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your e-mail"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your password" //12345
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "#b3d9ff",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
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

export default RegisterScreen;
