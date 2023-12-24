import { View } from "react-native";
import Onboarding from "./src/components/Onboarding/Onboarding";
import { useState } from "react";

import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/feature/login";
import Register from "./src/feature/register";
import Homepage from "./src/feature/home";

const theme = {
	colors: {
		grayMain: "#232323",
		grayText: "#80808080",
		grayBlack: "#000000",
		grayThrid: "#111111",
		grayLight: "#636363",
		grayWhite: "#DBDBDB",
		greenMain: "rgb(215, 252, 112)",
		greenSec: "#A1BD54",
		greenThird: "#C2E365",
		greenLight: "#F3FED3",
		greenWhite: "#FBFFF1",
		success: "#29AE29",
		warning: "#FFC62A",
		errorApp: "#EF4444",
		orange: "#ED7615",
		lavander: "#6E3CF5",
		sussie: "#38E1F1",
		blue_jeans: "#0082FF",
	},
};
export default function App() {
	console.log("rebombou");
	const [isLogged, setIsLogged] = useState();
	const Stack = createNativeStackNavigator();
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<View
					style={{
						position: "absolute",
						height: "100%",
						width: "100%",
						backgroundColor: "#000000",
					}}>
					<Stack.Navigator
						screenOptions={{
							contentStyle: {
								backgroundColor: "#000000",
								opacity: 1,
							},
						}}
						initialRouteName={"Homepage"}>
						<Stack.Screen
							name="Onboarding"
							component={Onboarding}
							options={{
								header: () => undefined,
							}}
						/>
						<Stack.Screen
							name="Login"
							component={Login}
							options={{
								header: () => undefined,
							}}
						/>
						<Stack.Screen
							name="Register"
							component={Register}
							options={{
								header: () => undefined,
							}}
						/>
						<Stack.Screen
							name="Homepage"
							component={Homepage}
							options={{
								header: () => undefined,
							}}
						/>
					</Stack.Navigator>
				</View>
			</NavigationContainer>
		</ThemeProvider>
	);
}
