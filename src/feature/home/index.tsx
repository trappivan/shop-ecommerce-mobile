import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-paper";
import Home from "./home";
import Category from "./category";
import Cart from "./cart";
import Orders from "./orders";
import Profile from "./profile";
import { useTheme } from "styled-components";
import { Image, View } from "react-native";
import { Box } from "../../style/styles";

export default function Homepage() {
	const theme = useTheme();
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveBackgroundColor: theme.colors.greenMain,
				tabBarInactiveBackgroundColor: theme.colors.greenMain,
			}}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					header: () => undefined,
					tabBarIcon: () => (
						<Image source={require("../../../assets/icons/homeOutlined.png")} />
					),
				}}
			/>
			<Tab.Screen
				name="Category"
				component={Category}
				options={{
					tabBarIcon: () => (
						<Image source={require("../../../assets/icons/homeFilled.png")} />
					),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{
					tabBarIcon: () => (
						<Image source={require("../../../assets/icons/homeFilled.png")} />
					),
				}}
			/>
			<Tab.Screen
				name="Orders"
				component={Orders}
				options={{
					tabBarIcon: () => (
						<Image source={require("../../../assets/icons/homeFilled.png")} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: () => (
						<Image source={require("../../../assets/icons/homeFilled.png")} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
