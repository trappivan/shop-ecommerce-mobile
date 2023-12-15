import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton, Text } from "react-native-paper";
import Home from "./home";
import Category from "./category";
import Cart from "./cart";
import Orders from "./orders";
import Profile from "./profile";
import { useTheme } from "styled-components";
import { Image, View } from "react-native";
import { Box, StyledButton } from "../../style/styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Homepage() {
  const theme = useTheme();

  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: theme.colors.greenMain,
        tabBarInactiveBackgroundColor: theme.colors.greenMain,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => undefined,
          tabBarActiveBackgroundColor: theme.colors.grayBlack,
          tabBarActiveTintColor: theme.colors.greenMain,
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Image source={require("../../../assets/icons/homeOutlined.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerLeft: () => {
            return (
              <IconButton
                icon={require("../../../assets/icons/chevron-left.png")}
                onPress={() => navigation.goBack()}
              />
            );
          },
          tabBarActiveBackgroundColor: theme.colors.grayBlack,
          tabBarActiveTintColor: theme.colors.greenMain,
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Image source={require("../../../assets/icons/elements.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarActiveBackgroundColor: theme.colors.grayBlack,
          tabBarActiveTintColor: theme.colors.greenMain,
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Image source={require("../../../assets/icons/cart.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarActiveBackgroundColor: theme.colors.grayBlack,
          tabBarActiveTintColor: theme.colors.greenMain,
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Image source={require("../../../assets/icons/box.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveBackgroundColor: theme.colors.grayBlack,
          tabBarActiveTintColor: theme.colors.greenMain,
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 14,
          },
          tabBarIcon: () => (
            <Image source={require("../../../assets/icons/user.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
