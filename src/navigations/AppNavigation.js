import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductDetail from "../screens/ProductDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="None">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerParent} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function DrawerParent() {
  return (
    <Drawer.Navigator
      initialRouteName="ProductScreen"
    >
      <Drawer.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={View}
        options={{
          title: "Search",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-search"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Category"
        component={View}
        options={{
          title: "Category",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="category"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={View}
        options={{
          title: "Cart",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-cart"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default AppNavigation;
