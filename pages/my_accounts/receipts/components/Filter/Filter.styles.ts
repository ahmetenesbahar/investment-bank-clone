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
  width: 100%;
  @media (max-width: ${breakpoints.md}px) {
    gap: 2rem;
  }
`;

export const FlexDiv = styled(Flex)<Props>`
  gap: 5rem;
  width: 100%;
  margin-top: ${margin.lg};
`;

export const NormalText = styled(Text)<Props>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.secondaryBlue};
  cursor: pointer;
`;

export const FullPageFilter = styled(Flex)<Props>`
  position: fixed;
  background-color: ${colors.white};
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  padding: ${padding.xl};
`;

export const ExitText = styled(Text)<Props>`
  position: absolute;
  left: 1rem;
  top: 1rem;
  cursor: pointer;
  color: ${colors.specialBlue};
`;

export const FilterButton = styled(Flex)<Props>`
  outline: none;
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.secondaryBlue};
  color: ${colors.white};
  font-size: 0.875rem;
  font-weight: 600;
  width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${padding.md};
`;
