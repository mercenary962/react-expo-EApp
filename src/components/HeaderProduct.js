import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HeaderProduct({ onPress, title, navigation }) {
  if (onPress === "Home") {
    return (
      <SafeAreaView>
        <View style={styles.toolbar}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={(styles.toolbarButton, styles.menuIcon)}
          >
            <Image
              source={require("../imgs/menu.png")}
              style={styles.btnIcon}
            />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>{title}</Text>
          <TouchableOpacity onPress={onPress} style={styles.toolbarButton}>
            <Image
              source={require("../imgs/cart.png")}
              style={styles.btnIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  if (onPress === "Back") {
    return (
      <SafeAreaView>
        <View style={styles.toolbar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={(styles.toolbarButton, styles.menuIcon)}
          >
            <Image
              source={require("../imgs/backArrow.png")}
              style={styles.btnIcon}
            />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>{title}</Text>
          <TouchableOpacity onPress={onPress} style={styles.toolbarButton}>
            <Image
              source={require("../imgs/cart.png")}
              style={styles.btnIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#b3d9ff",
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
  },
  toolbarButton: {
    width: 50,
    color: "#fff",
    textAlign: "center",
    alignItems: "center"
  },
  toolbarTitle: {
    color: "red",
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    flex: 1,
    fontSize: 24,
  },
  btnIcon: {
    height: 24,
    width: 24,
  },
  menuIcon: {
    paddingLeft: 20,
  },
});
