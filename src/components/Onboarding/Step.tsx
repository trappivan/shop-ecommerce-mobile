import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { useAppTheme } from "../../config/theme";
import { Button } from "react-native-paper";

const object = [
	{
		index: 0,
		label:
			"Browse thousands of products, from fashion to tech. Find what you love, effortlessly.",
		title: "Discover Our Products",
		button: "Next",
	},
	{
		index: 1,
		label:
			"Seamless payments and speedy delivery. Start shopping smarter today.",
		title: "Hassle-Free Checkout",
		button: "Next",
	},
	{
		index: 2,
		label: "Start shopping now and enjoy a world of convenience!",
		title: "Easy and Happy Shopping",
		button: "Get Started",
	},
];

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
const StyledViewContainer = styled.View`
	flex: 1;
	flex-direction: column;
	margin-top: 10px;
	align-items: center;
	width: 313px;
`;

const StyledTextTitle = styled.Text`
	color: #fbfbfb;
	font-size: 24px;
	margin-top: 32px;
`;

const StyledTextSmall = styled.Text`
	color: #808080;
	font-size: 14px;
	margin-top: 16px;
	text-align: center;
`;

const StyledButton = styled(Button)`
	margin-top: 32px;
	color: ${(props) => props.theme.colors?.primary};
	width: 327px;
	height: 56px;
`;

export default function Step() {
	return (
		<StyledViewContainer>
			<StyledTextTitle>Discover Our Products</StyledTextTitle>
			<StyledTextSmall>
				Browse thousands of products, from fashion to tech. Find what you love,
				effortlessly.
			</StyledTextSmall>
			<StyledButton>Next</StyledButton>
		</StyledViewContainer>
	);
}
