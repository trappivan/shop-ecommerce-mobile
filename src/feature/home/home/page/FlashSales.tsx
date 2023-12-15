import React from "react";
import { Image, Text } from "react-native";
import { Box, StyledButton, StyledText } from "../../../../style/styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Button, Icon, TouchableRipple } from "react-native-paper";
import { View } from "react-native";

export default function FlashSales() {
	const navigation = useNavigation();
	const theme = useTheme();
	return (
		<TouchableRipple
			onPress={() => navigation.navigate("Coupon")}
			rippleColor="rgba(0, 0, 0, .32)"
			style={{
				width: "100%",
				backgroundColor: theme.colors.greenMain,
				borderRadius: 30,
			}}>
			<Box
				display="flex"
				direction="row"
				justify="space-evenly"
				align="center"
				width="100%"
				height="80px">
				<Image
					tintColor={theme.colors.grayBlack}
					source={require("../../../../../assets/icons/Tag.png")}
				/>
				<Box
					width="60%"
					display="flex"
					direction="column"
					justify="center"
					align="start"
					height="100%">
					<StyledText fontSize="20px" color={theme.colors.grayBlack}>
						Flash Sales Every Day
					</StyledText>
					<Text>Time left: 23:47:56 </Text>
				</Box>
				<Image
					tintColor={theme.colors.grayBlack}
					source={require("../../../../../assets/icons/chevron-left.png")}
				/>
			</Box>
		</TouchableRipple>
	);
}
