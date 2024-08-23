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

export const SelectBoxDiv = styled(Flex)<Props>`
  max-width: 11rem;
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })<Props>`
  width: 16px;
  height: 16px;
  appearance: none;
  border: 1px solid ${colors.secondaryBlue};
  position: relative;
  cursor: pointer;
  outline: none;

  &:checked::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: ${colors.sidebarHoverItem};
  }

  &:checked {
    background-color: ${colors.white};
  }

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background: transparent;
    transition: background-color 0.3s;
  }
`;

export const HeaderText = styled(Text)<Props>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryBlue};
  margin-bottom: ${margin.xsm};
`;

export const FlexColumnDiv = styled(Flex)<Props>`
  width: 100%;
  flex-direction: column;
`;

export const FlexDiv = styled(Flex)<Props>`
  position: relative;
  width: 100%;
`;

export const FilterIcon = styled(Icon)<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  left: 1rem;
`;
export const ArrowIcon = styled(Icon)<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  right: 1rem;
`;
