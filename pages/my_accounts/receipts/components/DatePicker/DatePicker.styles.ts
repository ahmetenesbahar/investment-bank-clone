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

export const FlexDiv = styled(Flex)<Props>`
  position: relative;
  align-items: center;
  z-index: 3;
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

export const AbsoluteFlex = styled(Flex)<Props>`
  position: absolute;
  background-color: ${colors.white};
  top: 3.3rem;
  left: 0;
  border: 1px solid ${colors.borderColor};

  &::before {
    content: "";
    position: absolute;
    top: -14px;
    left: 3rem;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 13px solid ${colors.borderColor};
  }
  &::after {
    content: "";
    position: absolute;
    top: -13px;
    left: 3rem;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 13px solid ${colors.white};
  }
`;

export const DatePickerIcon = styled(Icon)<Props>`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
`;
