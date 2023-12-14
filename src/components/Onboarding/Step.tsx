import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Container } from "../../config/style";
import { StatusBar } from "expo-status-bar";
import { Link, useNavigation } from "@react-navigation/native";

const object = [
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
];

const StyledViewContainer = styled.View`
  background-color: ${(props) => props.theme.colors.grayMain};
  display: flex;
  justify-content: space-between;
`;
const StyledViewImage = styled.View`
  display: flex;
  height: 65%;
  justify-content: center;
  align-items: center;
`;

const StyledViewContainerA = styled.View`
  display: flex;
  flex-direction: column;
  height: 35%;
  align-items: center;
  width: max-content;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: ${(props) => props.theme.colors.grayBlack};
`;

const StyledTextTitle = styled.Text`
  color: #fbfbfb;
  font-size: 24px;
  margin-top: 32px;
`;

const StyledTextSmall = styled.Text`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  height: 35px;
  width: 80%;
  border-color: red;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
  background-color: ${(props) => props.theme.colors.greenMain};
  justify-content: center;

  width: 327px;
  height: 56px;
`;
const TextNext = styled(Text)`
  color: ${(props) => props.theme.colors.grayBlack};
`;
const StyledBottomView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  height: fit-content;
  width: fit-content;
`;
const StyledTextAlreadyLogged = styled(Text)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.grayText};
`;
const StyledLink = styled(Link)`
  margin-left: 8px;
  color: white;
`;

export default function Step() {
  const [step, setStep] = useState(0);
  const navigation = useNavigation();

  function handleClick() {
    if (step == 2) {
      navigation.navigate("Login");
      return;
    }
    setStep(step + 1);
  }
  return (
    <>
      <StyledViewContainer>
        <StyledViewImage>
          <Image width={327} height={327} source={object[step].image} />
        </StyledViewImage>
        <StyledViewContainerA>
          <StyledTextTitle>{object[step].title}</StyledTextTitle>
          <StyledTextSmall>{object[step].label}</StyledTextSmall>
          <StyledButton onPress={handleClick}>
            <TextNext>{object[step].button}</TextNext>
          </StyledButton>
          <StyledBottomView>
            <StyledTextAlreadyLogged>
              Already have an account ?
            </StyledTextAlreadyLogged>
            <StyledLink to={{ screen: "Login" }}>Log in</StyledLink>
          </StyledBottomView>
        </StyledViewContainerA>
      </StyledViewContainer>
      <StatusBar style="light" />
    </>
  );
}
