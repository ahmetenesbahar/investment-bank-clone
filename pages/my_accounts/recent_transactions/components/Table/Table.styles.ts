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

export const TableContainer = styled(Flex)<Props>`
  flex-direction: column;
  width: 100%;
  margin-top: ${margin.lg};
`;
export const TableDiv = styled(Flex)<Props>`
  width: 100%;
  justify-content: space-between;
`;

export const TableFlex = styled(Flex)<Props>`
  gap: 3.5rem;
`;

export const TableItemRow = styled(Flex)<Props>`
  width: 100%;
  padding: ${padding.sm} ${padding.xxl};
  border-bottom: 1px solid ${colors.borderColor};
  justify-content: space-between;
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`;

export const TableText = styled(Text)<Props>`
  color: ${colors.sidebarSubTitle};
  font-weight: 600;
  text-align: center;
`;
