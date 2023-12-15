import React, { useEffect } from "react";
import { Text } from "react-native";
import { Box } from "../../../style/styles";
import { useTheme } from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Coupon from "./coupon";
import Products from "./products";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import Page from "./page";

export default function Home() {
	const theme = useTheme();
	const Stack = createNativeStackNavigator();

	const navigation = useNavigation();
	console.log(navigation);

	return (
		// <Box backgroundColor={theme.colors.grayMain} width="100%" height="100%">
		<Stack.Navigator>
			<Stack.Screen
				name="Page"
				component={Page}
				options={{
					header: () => undefined,
					headerLeft: () => {
						return (
							<IconButton
								icon={require("../../../../assets/icons/chevron-left.png")}
								onPress={() => navigation.goBack()}
							/>
						);
					},
				}}
			/>
			<Stack.Screen
				name="Coupon"
				component={Coupon}
				options={{
					header: () => undefined,
					headerLeft: () => {
						return (
							<IconButton
								icon={require("../../../../assets/icons/chevron-left.png")}
								onPress={() => navigation.goBack()}
							/>
						);
					},
				}}
			/>
			<Stack.Screen
				name="Products"
				component={Products}
				options={{
					header: () => undefined,
					headerLeft: () => {
						return (
							<IconButton
								icon={require("../../../../assets/icons/chevron-left.png")}
								onPress={() => navigation.goBack()}
							/>
						);
					},
				}}
			/>
		</Stack.Navigator>
		// </Box>
	);
}
