import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, useTheme } from "react-native-paper";
import Onboarding from "./src/components/Onboarding/Onboarding";
import { theme } from "./src/config/theme";
import { useState } from "react";
import Home from "./src/feature/home";

export default function App() {
  console.log("rebombou");
  const [isLogged, setIsLogged] = useState(false);
  return (
    <PaperProvider theme={theme}>
      {isLogged ? <Home /> : <Onboarding />}
    </PaperProvider>
  );
}
