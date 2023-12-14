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

export const Box = styled(View)`
  z-index: ${(props) => props.zindex || 0};
  background-color: ${(props) => props.backgroundColor};
  display: ${props => props.display || 'none'};
  position: ${props => props.position || 'unset'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => props.row || 'column' };
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.maxWidth || '100%'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.maxHeight || 'auto'};
  padding: ${(props) => props.padding || '0px'};
  padding-top: ${(props) =>
    props.paddingTop || '0px'};
  padding-bottom: ${(props) =>
    props.paddingBottom };
  margin: ${(props) => props.margin || 0};
  border-radius: ${(props) => props.borderRadius || '0px'};
  border: ${(props) => props.border || 'none'};
`;
// export const BoxImage = styled(View)`
//   height: ${(props) => props.height};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// export const BoxLogin = styled(View)`
//   height: ${(props) => props.height};
//   border-top-right-radius: 50px;
//   z-index: 50;
//   border-top-left-radius: 50px;
//   background-color: ${(props) => props.theme.colors.grayBlack};
//   display: flex;
//   align-items: center;
// `;
// export const BoxText = styled(View)`
//   display: flex;
//   flex-direction: column;
//   height: fit-content;
// `;
// export const BoxInput = styled(View)`
//   display: flex;
//   z-index: 100;
//   justify-content: center;
//   align-items: center;
//   gap: 16px;
//   width: 100%;
// `;
// // const StyledTextInput = styled(TextInput)`
// // 	width: 80%;
// // `;

// interface Inputs {
//   login: string;
//   password: string;
// }

// export const StyledButton = styled(Button)`
//   background-color: ${(props) => props.theme.colors.greenMain};
//   justify-content: center;

//   width: 327px;
//   height: 56px;
// `;
// export const TextLogin = styled(Text)`
//   color: ${(props) => props.theme.colors.grayBlack};
// `;
// export const BoxSignUp = styled(View)`
//   border: 10px;

//   border-color: red;
//   display: flex;
//   flex-direction: row;
// `;

// export const TextStyled = styled(Text)`
//   color: ${(props) => props.theme.colors.grayText};
// `;
// const StyledViewContainer = styled.View`
//   background-color: ${(props) => props.theme.colors.grayMain};
//   display: flex;
//   justify-content: space-between;
// `;
// const StyledViewImage = styled.View`
//   display: flex;
//   height: 65%;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledViewContainerA = styled.View`
//   display: flex;
//   flex-direction: column;
//   height: 35%;
//   align-items: center;
//   width: max-content;
//   border-top-right-radius: 50px;
//   border-top-left-radius: 50px;
//   background-color: ${(props) => props.theme.colors.grayBlack};
// `;

// const StyledTextTitle = styled.Text`
//   color: #fbfbfb;
//   font-size: 24px;
//   margin-top: 32px;
// `;

// const StyledTextSmall = styled.Text`
//   color: ${(props) => props.theme.colors.grayText};
//   font-size: 14px;
//   margin-top: 16px;
//   text-align: center;
//   height: 35px;
//   width: 80%;
//   border-color: red;
// `;

// const StyledButton = styled(Button)`
//   margin-top: 32px;
//   background-color: ${(props) => props.theme.colors.greenMain};
//   justify-content: center;

//   width: 327px;
//   height: 56px;
// `;
// const TextNext = styled(Text)`
//   color: ${(props) => props.theme.colors.grayBlack};
// `;
// const StyledBottomView = styled.View`
//   display: flex;
//   flex-direction: row;
//   margin-top: 16px;
//   height: fit-content;
//   width: fit-content;
// `;
// const StyledTextAlreadyLogged = styled(Text)`
//   font-size: 14px;
//   color: ${(props) => props.theme.colors.grayText};
// `;
// const StyledLink = styled(Link)`
//   margin-left: 8px;
//   color: white;
// `;