import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, useTheme } from "react-native-paper";
import Onboarding from "./src/components/Onboarding/Onboarding";
//import { theme } from "./src/config/theme";
import { useState } from "react";
import Home from "./src/feature/home";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./src/config/theme";

const theme = {
	colors: COLORS,
};

export default function App() {
	console.log("rebombou");
	const [isLogged, setIsLogged] = useState(false);
	return (
		<PaperProvider theme={theme}>
			<ThemeProvider theme={theme}>
				{isLogged ? <Home /> : <Onboarding />}
			</ThemeProvider>
		</PaperProvider>
		// <PaperProvider theme={theme}>
		// 	{isLogged ? <Home /> : <Onboarding />}
		// </PaperProvider>
	);
}
