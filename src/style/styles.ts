import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const Box = styled(View)`
	z-index: ${(props) => props.zindex || 0};
	gap: ${(props) => props.gap || "0px"};
	background-color: ${(props) => props.backgroundColor};
	display: ${(props) => props.display || undefined};
	position: ${(props) => props.position || undefined};
	flex-wrap: ${(props) => props.wrap || "nowrap"};
	flex-direction: ${(props) => props.direction || "column"};
	justify-content: ${(props) => props.justify || "flex-start"};
	align-items: ${(props) => props.align || "flex-start"};
	width: ${(props) => props.width || "100%"};
	max-width: ${(props) => props.maxWidth || "100%"};
	height: ${(props) => props.height || "auto"};
	max-height: ${(props) => props.maxHeight || "auto"};
	padding: ${(props) => props.padding || "0px"};
	padding-top: ${(props) => props.paddingTop || "0px"};
	padding-bottom: ${(props) => props.paddingBottom};
	margin: ${(props) => props.margin || 0};
	margin-top: ${(props) => props.marginTop || "0px"};
	margin-bottom: ${(props) => props.marginBottom || "0px"};
	border-radius: ${(props) => props.borderRadius || "0px"};
	border: ${(props) => props.border || "none"};
	border-top-left-radius: ${(props) => props.borderTopLeftRadius || "0px"};
	border-top-right-radius: ${(props) => props.borderTopRightRadius || "0px"};
`;
export const StyledText = styled(Text)`
	text-align: ${(props) => props.textAlign || "auto"};
	margin-top: ${(props) => props.marginTop || "0px"};
	margin-right: ${(props) => props.marginRight || "0px"};
	width: ${(props) => props.width || "fit-content"};
	height: ${(props) => props.height || "auto"};
	font-size: ${(props) => props.fontSize || "14px"};
	font-weight: ${(props) => props.fontWeight || "400"};
	color: ${(props) => props.color};
`;
export const StyledButton = styled(Button)`
	background-color: ${(props) =>
		props.backgroundColor || props.theme.colors.greenMain};
	justify-content: ${(props) => props.justify || ""};
	flex-direction: ${(props) => props.direction || ""};
	display: ${(props) => props.display || ""};
	gap: ${(props) => props.gap || "0px"};
	margin-top: ${(props) => props.marginTop || "0px"};
	/* align-items: ${(props) => props.align || ""}; */
	width: ${(props) => props.width || "100%"};
	height: ${(props) => props.height || "auto"};
`;
