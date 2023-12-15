import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { useState } from "react";
import { Text } from "react-native";
import { Box, StyledButton } from "../../../../style/styles";
import { useTheme } from "styled-components";
import FlashSales from "./FlashSales";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Page() {
	const navigation = useNavigation();
	const theme = useTheme();
	const [search, setSearch] = useState("eletronicos");
	console.log("query", search);
	return (
		<Box backgroundColor={theme.colors.grayMain} height="100%">
			<View>
				<Text>Baboseira</Text>
				<Text>Baboseira</Text>
				<Text>Baboseira</Text>
			</View>
			<Box marginBottom="16px">
				<Searchbar
					placeholder="Search products or categories..."
					mode="bar"
					placeholderTextColor="white"
					style={{ backgroundColor: theme.colors.grayBlack }}
					inputStyle={{
						//backgroundColor: theme.colors.grayBlack,
						color: "white",
					}}
					value={search}
					onChangeText={(text) => setSearch(text)}
				/>
			</Box>
			<FlashSales />
		</Box>
	);
}
