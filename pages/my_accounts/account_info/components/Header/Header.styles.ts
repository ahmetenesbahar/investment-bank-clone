import styled from "styled-components";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";
import { padding } from "@/utils/constants";
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

export const HeaderContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;

  @media (max-width: ${breakpoints.lg}) {
    width: 100% !important;
  }
`;

export const HeaderFlex = styled(Flex)<Props>`
  margin-top: ${padding.sm};
  gap: 15px;
  position: relative;
  ${(props) =>
    props.active &&
    `
    padding-right: ${padding.md};`}
`;

export const HeaderFlexBorderBottom = styled(Flex)<Props>`
  border-bottom: 1px solid ${colors.borderColor};
  padding-bottom: ${padding.lg};
  width: 100%;
`;

export const HeaderText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.secondaryBlue};
  cursor: pointer;
`;

export const HeaderNormalText = styled(Text)`
  cursor: pointer;
  font-weight: 500;
  user-select: none;
`;

export const SelectBoxDiv = styled.div<Props>`
  position: absolute;
  display: ${(props) => (props.display ? props.display : "none")};
  flex-direction: column;
  width: 8.75rem;
  right: 0;
  top: 1.875rem;
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.white};
  z-index: 3;

  ${(props) =>
    props.active &&
    `
    &::before {
    content: "";
    position: absolute;
    top: -8px;
    right: 10px;
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent ${colors.borderColor} transparent;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: -7px;
    right: 11px;
    border-width: 0 7px 7px 7px;
    border-style: solid;
    border-color: transparent transparent ${colors.white} transparent;
    z-index: 2;
  }
    `}

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    top: 42px;
  }
`;

export const FlexDiv = styled(Flex)<Props>`
  gap: 5px;
  align-items: center;
`;

export const SelectBoxItem = styled.div<Props>`
  border-bottom: 1px solid ${colors.borderColor};
  padding: ${padding.xsm};
`;

export const Image = styled(Icon)`
  ${(props) =>
    props.active &&
    `
    transform: rotate(180deg);`}
`;

export const Dropdown = styled(Flex)<Props>`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${colors.filterBlue};
  padding: ${padding.smd};
`;

export const DropdownIcon = styled(Icon)<Props>`
  position: absolute;
  right: 10px;
`;
