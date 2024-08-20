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

export const AmountRangeContainer = styled(Flex)<Props>`
  position: relative;
  margin-top: ${margin.lg};
`;

export const Input = styled.input<Props>`
  padding: ${padding.sm};
  max-width: 9.25rem;
  margin-top: ${margin.xsm};,
  outline: none !important;
  border: 1px solid ${colors.secondaryBorderColor};

  &:focus {
  outline: none !important;
  }

`;

export const FlexDiv = styled(Flex)<Props>`
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderText = styled(Text)<Props>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryBlue};
`;
