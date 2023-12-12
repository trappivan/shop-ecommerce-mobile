import styled from "styled-components/native";

interface Container {}

export const Container = styled.View`
	background-color: ${({ props }) => props};
	height: 200px;
	width: 200px;
`;
