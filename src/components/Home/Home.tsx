import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, Button } from "react-native-paper";
import { useAppTheme } from "../../config/theme";
import { useState } from "react";

export default function Home() {
  const theme = useAppTheme();
  const [bomba, setbomba] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text
        style={{
          color: theme.colors.greenMain,
          backgroundColor: theme.colors.grayBlack,
        }}
      >
        AaaaaaaAAA
      </Text>
      <Text
        style={{
          color: theme.colors.greenMain,
          backgroundColor: theme.colors.grayBlack,
        }}
      >
        AaaaaaaAAA
      </Text>
      <Button onPress={() => setbomba(bomba + 1)}>Texto</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
