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
import {
  Box,
  BoxImage,
  BoxInput,
  BoxLogin,
  StyledButton,
  TextLogin,
} from "../login";

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
          navigation.navigate("Home", { params: { bomba: 1 } });
        }
      }
    );
  };
  return (
    <Box>
      <BoxImage>
        <Image source={require("../../../assets/logo.png")} />
      </BoxImage>
      <BoxLogin height={7000}>
        <BoxInput>
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
            value={password}
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
          <StyledButton onPress={handleSubmit(onSubmit)}>
            <TextLogin>Enter</TextLogin>
          </StyledButton>
        </BoxInput>
      </BoxLogin>
    </Box>
  );
}
