import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, useTheme } from "react-native-paper";
import Onboarding from "./src/components/Onboarding/Onboarding";
//import { theme } from "./src/config/theme";
import { useState } from "react";
import Home from "./src/feature/home";
import { useAppTheme } from "./src/config/theme";
import { ThemeProvider } from "styled-components";
import { colors } from "./assets/theme.json";

export default function App() {
	console.log("rebombou");
	const [isLogged, setIsLogged] = useState(false);

	return (
		<ThemeProvider theme={colors}>
			<PaperProvider>{isLogged ? <Home /> : <Onboarding />}</PaperProvider>
		</ThemeProvider>
		// <PaperProvider theme={theme}>
		// 	{isLogged ? <Home /> : <Onboarding />}
		// </PaperProvider>
	);
}
