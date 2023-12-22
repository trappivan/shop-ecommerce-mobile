import React from "react";
import { Text } from "react-native";
import { Box, StyledText } from "../../../../style/styles";
import { useTheme } from "styled-components";

interface ProductsCard {
	productType: string;
}

const data = {
	title: "Eletrônicos",
};

export default function ProductsCard({ productType }: ProductsCard) {
	const theme = useTheme();
	return (
		<Box display="flex" height="40%" width="100%" border="10px">
			<StyledText>ProductsCard</StyledText>
		</Box>
	);
}
