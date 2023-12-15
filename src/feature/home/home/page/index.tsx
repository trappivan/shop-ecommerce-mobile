import { useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { Box, StyledButton } from "../../../../style/styles";

export default function Page() {
  const navigation = useNavigation();

  console.log("navigation", navigation);
  console.log("getstate", navigation.getState());
  return (
    <Box>
      <StyledButton onPress={() => navigation.navigate("Coupon")}>
        go back
      </StyledButton>
      <Text>Page</Text>
    </Box>
  );
}
