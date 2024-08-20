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
}

export const DateSelectContainer = styled.div<Props>`
  width: 100%;
  margin-top: ${margin.xxl};
  flex-direction: column;
`;
export const HeaderText = styled(Text)<Props>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryBlue};
`;
export const InfoIcon = styled(Icon)<Props>`
  margin-left: 0.5rem;
`;
export const FlexDiv = styled(Flex)<Props>`
  align-items: center;
  gap: 0.5rem;
`;
