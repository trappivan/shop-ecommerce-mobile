import React from "react";
import { Text } from "react-native";
import { Box, StyledButton } from "../../../../style/styles";
import { useNavigation } from "@react-navigation/native";

export default function Coupon() {
  const navigation = useNavigation();
  return (
    <Box>
      <StyledButton onPress={() => navigation.goBack()}>go back</StyledButton>
      <Text>Page</Text>
      <Text>Coupon</Text>
    </Box>
  );
}
