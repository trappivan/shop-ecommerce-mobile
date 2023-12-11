import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, useTheme } from "react-native-paper";
import Home from "./src/components/Home/Home";
import { theme } from "./src/config/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
