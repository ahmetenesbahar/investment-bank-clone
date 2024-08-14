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

export const FilterContainer = styled(Flex)`
  width: 100%;
  margin-top: ${margin.xl};
  gap: 1rem;
`;

export const FlexDiv = styled.div<Props>`
  max-width: 11rem;
  width: 100%;
  position: relative;
`;

export const FilterIcon = styled(Icon)<Props>`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export const ArrowIcon = styled(Icon)<Props>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  z-index: 99;

  ${({ active }) =>
    active &&
    `
    transform: translate(-50%, -50%) rotate(180deg);
  `}
`;
