import React, { useMemo, useState } from "react";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, useNavigation } from "@react-navigation/native";
import { Box, StyledButton, StyledText } from "../../style/styles";
import { useTheme } from "styled-components";

export default function Step() {
	const [step, setStep] = useState(0);
	const navigation = useNavigation();
	const theme = useTheme();
	const object = useMemo(
		() => [
			{
				index: 0,
				label:
					"Browse thousands of products, from fashion to tech. Find what you love, effortlessly.",
				title: "Discover Our Products",
				button: "Next",
				image: require("../../../assets/step1.png"),
			},
			{
				index: 1,
				label:
					"Seamless payments and speedy delivery. Start shopping smarter today.",
				title: "Hassle-Free Checkout",
				button: "Next",
				image: require("../../../assets/step2.png"),
			},
			{
				index: 2,
				label: "Start shopping now and enjoy a world of convenience!",
				title: "Easy and Happy Shopping",
				button: "Get Started",
				image: require("../../../assets/step3.png"),
			},
		],
		[]
	);
	function handleClick() {
		if (step == 2) {
			navigation.navigate("Login");
			return;
		}
		setStep(step + 1);
	}
	return (
		<>
			<Box
				display="flex"
				justify="space-between"
				backgroundColor={theme.colors.grayMain}>
				<Box height="65%" display="flex" justify="center" align="center">
					<Image width={327} height={327} source={object[step].image} />
				</Box>
				<Box
					display="flex"
					direction="column"
					height="35%"
					align="center"
					borderTopLeftRadius="50px"
					borderTopRightRadius="50px"
					backgroundColor={theme.colors.grayBlack}
					width="100%">
					<StyledText color="white" marginTop="32px" fontSize="24px">
						{object[step].title}
					</StyledText>
					<StyledText
						color={theme.colors.grayText}
						marginTop="16px"
						height="35px"
						width="80%">
						{object[step].label}
					</StyledText>
					<StyledButton
						marginTop="24px"
						backgroundColor={theme.colors.greenMain}
						width="327px"
						height="56px"
						justify="center"
						onPress={handleClick}>
						<StyledText color={theme.colors.grayBlack}>
							{object[step].button}
						</StyledText>
					</StyledButton>
					<Box display="flex" marginTop="16px" direction="row" justify="center">
						<StyledText color={theme.colors.grayText}>
							Already have an account ?
						</StyledText>
						<Link
							style={{ marginLeft: 8, color: "white" }}
							to={{ screen: "Login" }}>
							Log in
						</Link>
					</Box>
				</Box>
			</Box>
			<StatusBar style="light" />
		</>
	);
}
