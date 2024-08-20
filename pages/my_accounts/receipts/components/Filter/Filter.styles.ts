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
`;

export const ArrowIcon = styled(Icon)<Props>`
  ${({ active }) => active && `transform: rotate(180deg);`}
`;

export const FilterIcon = styled(Icon)<Props>``;

export const FilterDiv = styled(Flex)<Props>`
  width: 100%;
  flex-direction: column;
  border: 1px solid ${colors.secondaryBorderColor};
  padding: ${padding.sm} ${padding.md};
  ${({ active }) => active && `height: 23.125rem;`}
`;

export const FlexFilterDiv = styled(Flex)<Props>`
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
`;

export const FlexBetween = styled(Flex)<Props>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const FlexColumn = styled(Flex)<Props>`
  flex-direction: column;
`;

export const FlexDiv = styled(Flex)<Props>`
  gap: 3rem;
`;

export const NormalText = styled(Text)<Props>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.secondaryBlue};
  cursor: pointer;
`;
