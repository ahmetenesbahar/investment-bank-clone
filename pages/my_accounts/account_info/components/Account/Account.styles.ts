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

export const AccountContainer = styled(Flex)<Props>`
  flex-direction: column;

  width: 100%;
  justify-content: space-between;
  margin-top: ${margin.lg};
`;
export const FlexContainer = styled(Flex)<Props>`
  width: 100%;
  align-items: center;
`;

export const HeaderDiv = styled(Flex)<Props>`
  width: 100%;
  background-color: ${colors.tableBackground};
  padding: ${padding.sm} ${padding.md};
  border-bottom: 1px solid ${colors.borderColor};
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`;
export const HeaderText = styled(Text)<Props>`
  color: ${colors.sidebarSubTitle};
  font-weight: 600;
`;

export const HeaderIcon = styled(Icon)<Props>``;
