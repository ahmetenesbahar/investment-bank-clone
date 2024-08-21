import styled from "styled-components";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";
import { padding, margin } from "@/utils/constants";
import { Flex, Text, Icon } from "@/styles/styles";

interface Props {
  justifyContent?: string;
  padding?: string;
  alignItems?: string;
  flexDirection?: string;
  margin?: string;
  width?: string;
  marginTop?: string;
  display?: string;
  active?: boolean;
  marginBottom?: string;
  color?: string;
  backgroundColor?: string;
}

export const SelectedReceiptsContainer = styled(Flex)<Props>`
  position: absolute;
  bottom: 0;
  height: 5.625rem;
  align-items: center;
  justify-content: space-between;
  padding: ${padding.md};
  width: 49.25rem;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
  }
`;

export const NormalText = styled(Text)<Props>``;

export const FlexDiv = styled(Flex)<Props>`
  gap: 1.25rem;
`;

export const Button = styled.button<Props>`
  outline: none;
  cursor: pointer;
  border: 1px solid ${colors.borderColor};
  padding: ${padding.md} ${padding.xl};
  min-width: 9.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;
