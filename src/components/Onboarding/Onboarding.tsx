import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { PaperProvider, MD3DarkTheme, Button } from "react-native-paper";
import { theme, useAppTheme } from "../../config/theme";
import { useState } from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Svg } from "react-native-svg";
import Step from "./Step";
import styled, { useTheme } from "styled-components";

const StyledView = styled.View`
	display: absolute;
	bottom: 0;
	height: 300px;
	width: 100%;
	align-items: center;
	background-color: black;
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;
`;

const StyledViewContainer = styled.View`
	background-color: ${(props) => props.theme.colors.grayThrid};
	flex: 1;
	align-items: "center";
	justify-content: "center";
`;

const StyledViewImage = styled.View`
	margin-bottom: 101px;
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;

export default function Onboarding() {
	const [bomba, setbomba] = useState(0);
	console.log(bomba);
	return (
		<StyledViewContainer>
			<StatusBar style="light" />
			<StyledViewImage>
				<Image
					width={200}
					height={200}
					source={require("../../../assets/logo.png")}
				/>
			</StyledViewImage>
			<StyledView>
				<Step />
			</StyledView>
		</StyledViewContainer>
	);
}
