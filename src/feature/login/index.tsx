import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaskedTextInput, mask, unMask } from "react-native-mask-text";
import { Button, TextInput } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useTheme } from "styled-components";
import styled from "styled-components/native";

const Box = styled(View)`
	height: 100%;
	width: max-content;
	z-index: 10;
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
	border-top-right-radius: 50px;
	z-index: 50;
	border-top-left-radius: 50px;
	background-color: ${(props) => props.theme.colors.grayBlack};
	display: flex;
	align-items: center;
`;
const BoxText = styled(View)`
	display: flex;
	flex-direction: column;
	height: fit-content;
`;
const BoxInput = styled(View)`
	display: flex;
	z-index: 100;
	justify-content: center;
	align-items: center;
	gap: 16px;
	width: 100%;
`;
// const StyledTextInput = styled(TextInput)`
// 	width: 80%;
// `;

interface Inputs {
	login: string;
	password: string;
}

const StyledButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.greenMain};
	justify-content: center;

	width: 327px;
	height: 56px;
`;
const TextLogin = styled(Text)`
	color: ${(props) => props.theme.colors.grayBlack};
`;

const schema = z
	.object({
		login: z.string(),
		password: z.string().min(5),
	})
	.required();

export default function Login() {
	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		watch,
		formState: { isSubmitSuccessful, errors },
		trigger,
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
		},
		resolver: zodResolver(schema),
	});

	const navigation = useNavigation();
	const login = watch("login");
	const password = watch("password");
	const theme = useTheme();
	const onSubmit = (data: any) => {
		console.log("Submitted", data);
		console.log("Submitted", isSubmitSuccessful);
		trigger(["login", "password"]).then((isValid) => {
			if (isValid) {
				navigation.navigate("Home", { params: { bomba: 1 } });
			}
		});
	};
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
						{...(register("login"), { required: true })}
						textColor="white"
						mode="outlined"
						keyboardType="numeric"
						outlineColor={theme.colors.greenMain}
						activeOutlineColor={theme.colors.greenMain}
						style={{
							color: theme.colors.greenMain,
							backgroundColor: theme.colors.grayMain,
							width: "80%",
						}}
						label="Mobile Number"
						placeholder="Mobile Number"
						value={mask(login, "(99) 9 9999-9999")}
						maxLength={16}
						onChangeText={(text) => {
							setValue("login", unMask(text));
						}}
					/>
					<TextInput
						{...(register("password"), { required: true })}
						mode="outlined"
						value={password}
						secureTextEntry
						right={<TextInput.Icon icon="eye" />}
						outlineColor={theme.colors.greenMain}
						activeOutlineColor={theme.colors.greenMain}
						textColor="white"
						style={{ backgroundColor: theme.colors.grayMain, width: "80%" }}
						label="Password"
						placeholder="Password"
						onChangeText={(text) => {
							setValue("password", text);
						}}
					/>
					<StyledButton onPress={handleSubmit(onSubmit)}>
						<TextLogin>Enter</TextLogin>
					</StyledButton>
				</BoxInput>
				<Text>Sign Up</Text>
			</BoxLogin>
		</Box>
	);
}
