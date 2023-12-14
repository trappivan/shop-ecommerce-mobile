import React from "react";
import { Text } from "react-native";
import { Box } from "../../../style/styles";
import { useTheme } from "styled-components";

export default function Home() {
	const theme = useTheme();
	return (
		<Box backgroundColor={theme.colors.grayMain} width="100%" height="100%">
			<Text>Home</Text>
		</Box>
	);
}
