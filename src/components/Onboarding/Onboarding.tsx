import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, Button } from "react-native-paper";
import { useState } from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Svg } from "react-native-svg";
import Step from "./Step";
import styled, { useTheme } from "styled-components/native";

// const StyledView = styled.View`
// 	display: absolute;
// 	bottom: 0;
// 	height: 300px;
// 	width: 100%;
// 	align-items: center;
// 	background-color: black;
// 	border-top-right-radius: 40px;
// 	border-top-left-radius: 40px;
// `;

// const StyledViewContainer = styled.View`
// 	background-color: ${(props) => props.theme.colors.grayMain};
// 	flex: 1;
// 	align-items: "center";
// 	justify-content: "center";
// `;

export default function Onboarding() {
	const [bomba, setbomba] = useState(0);
	console.log(bomba);
	return <Step />;
}
