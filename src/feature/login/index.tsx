import React from "react";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const Box = styled(View)`
	height: 100%;
	width: max-content;
	background-color: ${(props) => props.theme.colors.grayMain};
`;
const BoxImage = styled(View)`
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const BoxLogin = styled(View)`
	height: 50%;
	background-color: ${(props) => props.theme.colors.grayBlack};
	display: flex;
	align-items: center;
`;
const BoxText = styled(View)`
	display: flex;
	flex-direction: column;
`;
const BoxInput = styled(View)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	width: 100%;
`;
// const StyledTextInput = styled(TextInput)`
// 	width: 80%;
// `;

export default function Login() {
	const theme = useTheme();
	return (
		<Box>
			<BoxImage>
				<Image source={require("../../../assets/logo.png")} />
			</BoxImage>
			<BoxLogin>
				<BoxText>
					<Text>Welcome</Text>
					<Text>Enter your details below</Text>
				</BoxText>
				<BoxInput>
					<TextInput
						mode="outlined"
						activeOutlineColor={theme.colors.greenMain}
						label="Login"
					/>
					<TextInput label="Password" />
				</BoxInput>
				<Text>Sign Up</Text>
			</BoxLogin>
		</Box>
	);
}
