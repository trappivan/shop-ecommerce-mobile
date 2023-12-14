import { Link, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaskedTextInput, mask, unMask } from "react-native-mask-text";
import { Button, TextInput } from "react-native-paper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useTheme } from "styled-components";
import { Box, StyledButton, StyledText } from "../../style/styles";

const schema = z
	.object({
		mobile_number: z.string().min(12),
		password: z.string(),
		confirmPassword: z.string(),
	})
	.required();

export default function Register() {
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
			mobile_number: "",
			password: "",
			confirmPassword: "",
		},
		resolver: zodResolver(schema),
	});

	const navigation = useNavigation();
	const login = watch("mobile_number");
	const password = watch("password");
	const confirmPassword = watch("confirmPassword");
	const theme = useTheme();
	const onSubmit = (data: any) => {
		console.log("Submitted", data);
		console.log("Submitted", isSubmitSuccessful);
		trigger(["mobile_number", "password", "confirmPassword"]).then(
			(isValid) => {
				if (isValid) {
					console.log("aaa");
					if (password === confirmPassword) {
						console.log("password", password);
						console.log("confirmPassword", confirmPassword);
						navigation.navigate("Home", { params: { bomba: 1 } });
					}
				}
			}
		);
	};
	return (
		<Box
			display="flex"
			justify="center"
			align="center"
			width="100%"
			height="100%"
			backgroundColor={theme.colors.grayMain}>
			<Box display="flex" justify="center" align="center" height="30%">
				<Image source={require("../../../assets/logo.png")} />
			</Box>
			<Box
				gap="16px"
				backgroundColor={theme.colors.grayBlack}
				borderTopLeftRadius="50px"
				borderTopRightRadius="50px"
				display="flex"
				align="center"
				height="70%">
				<Box
					marginTop="24px"
					display="flex"
					justify="center"
					align="center"
					gap="8px"
					flexDirection="row">
					<StyledText fontSize="24px" color="white">
						Get Started
					</StyledText>
					<StyledText color={theme.colors.grayText}>
						Enter your details below
					</StyledText>
				</Box>
				<Box
					marginTop="8px"
					display="flex"
					justify="center"
					align="center"
					gap="16px"
					flexDirection="row">
					<TextInput
						{...(register("mobile_number"), { required: true })}
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
							setValue("mobile_number", unMask(text));
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
					<TextInput
						{...(register("password"), { required: true })}
						mode="outlined"
						value={confirmPassword}
						secureTextEntry
						right={<TextInput.Icon icon="eye" />}
						outlineColor={theme.colors.greenMain}
						activeOutlineColor={theme.colors.greenMain}
						textColor="white"
						style={{ backgroundColor: theme.colors.grayMain, width: "80%" }}
						label="Confirm password"
						placeholder="Confirm password"
						onChangeText={(text) => {
							setValue("confirmPassword", text);
						}}
					/>
					<StyledButton
						backgroundColor={theme.colors.greenMain}
						width="327px"
						height="56px"
						justify="center"
						onPress={handleSubmit(onSubmit)}>
						<StyledText color={theme.colors.grayBlack}>Sign Up</StyledText>
					</StyledButton>
				</Box>
			</Box>
		</Box>
	);
}
