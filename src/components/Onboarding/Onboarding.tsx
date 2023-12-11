import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, Button } from "react-native-paper";
import { theme, useAppTheme } from "../../config/theme";
import { useState } from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Svg } from "react-native-svg";

export default function Onboarding() {
  const theme = useAppTheme();
  const [bomba, setbomba] = useState(0);
  console.log(bomba);
  return (
    <>
      <View style={styles.container}>
        <Image
          width={200}
          height={200}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grayBlack,
    alignItems: "center",
    justifyContent: "center",
  },
});
