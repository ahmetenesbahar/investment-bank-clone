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
}

export const InfoBoxContainer = styled(Flex)<Props>`
  background-color: ${colors.hoverWhite};
  width: 100%;
  padding: ${padding.xl};
  margin-top: ${margin.xl};
  gap: 1.5rem;
`;

export const InfoIcon = styled(Icon)<Props>``;
export const NormalText = styled(Text)<Props>`
  color: ${colors.secondaryBlue};
  font-size: 0.875rem;
  font-weight: 500;
`;
