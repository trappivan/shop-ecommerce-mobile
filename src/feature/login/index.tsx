import { Link, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaskedTextInput, mask, unMask } from "react-native-mask-text";
import { Button, TextInput } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { Box, StyledButton, StyledText } from "../../style/styles";

// export const Box = styled(View)`
//   height: 100%;
//   width: max-content;
//   z-index: 10;
//   background-color: ${(props) => props.backgroundColor};
//`;
// export const BoxImage = styled(View)`
// 	height: ${(props) => props.height};
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;
// export const BoxLogin = styled(View)`
// 	height: ${(props) => props.height};
// 	border-top-right-radius: 50px;
// 	z-index: 50;
// 	border-top-left-radius: 50px;
// 	background-color: ${(props) => props.theme.colors.grayBlack};
// 	display: flex;
// 	align-items: center;
// `;
// export const BoxText = styled(View)`
// 	display: flex;
// 	flex-direction: column;
// 	height: fit-content;
// `;
// export const BoxInput = styled(View)`
// 	display: flex;
// 	z-index: 100;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 16px;
// 	width: 100%;
// `;
// const StyledTextInput = styled(TextInput)`
// 	width: 80%;
// `;

// export const StyledButton = styled(Button)`
// 	background-color: ${(props) => props.theme.colors.greenMain};
// 	justify-content: center;

// 	width: 327px;
// 	height: 56px;
// `;
// export const TextLogin = styled(Text)`
// 	color: ${(props) => props.theme.colors.grayBlack};
// `;
// export const BoxSignUp = styled(View)`
// 	border: 10px;

// 	border-color: red;
// 	display: flex;
// 	flex-direction: row;
// `;

// export const TextStyled = styled(Text)`
// 	color: ${(props) => props.theme.colors.grayText};
// `;

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
				navigation.navigate("Homepage", { params: { bomba: 1 } });
			}
		});
	};
	return (
		<Box
			display="flex"
			justify="center"
			align="center"
			width="100%"
			height="100%"
			backgroundColor={theme.colors.grayMain}>
			<Box display="flex" justify="center" align="center" height="50%">
				<Image source={require("../../../assets/logo.png")} />
			</Box>
			<Box
				gap="16px"
				backgroundColor={theme.colors.grayBlack}
				borderTopLeftRadius="50px"
				borderTopRightRadius="50px"
				display="flex"
				align="center"
				height="50%">
				<Box
					marginTop="24px"
					display="flex"
					justify="center"
					align="center"
					gap="8px"
					flexDirection="row">
					<StyledText fontSize="24px" color="white">
						Welcome back!
					</StyledText>
					<StyledText color={theme.colors.grayText}>
						Enter your details below
					</StyledText>
				</Box>
				<Box
					display="flex"
					justify="center"
					align="center"
					gap="16px"
					width="100%">
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
					<StyledButton
						backgroundColor={theme.colors.greenMain}
						width="327px"
						height="56px"
						justify="center"
						onPress={handleSubmit(onSubmit)}>
						<StyledText
							width="327px"
							height="56px"
							color={theme.colors.grayBlack}>
							Enter
						</StyledText>
					</StyledButton>
				</Box>
				<Box display="flex" justify="center" direction="row">
					<StyledText color={theme.colors.grayText}>
						Don't have an account?
					</StyledText>
					<Link
						style={{ color: "white", marginLeft: 12 }}
						to={{ screen: "Register" }}>
						Sign Up
					</Link>
				</Box>
			</Box>
		</Box>
	);
}
