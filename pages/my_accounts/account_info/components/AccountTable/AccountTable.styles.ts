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

export const AccountTableContainer = styled(Flex)<Props>`
  flex-direction: column;
  width: 100%;
  margin-top: ${margin.lg};
`;

export const AccountTableHeader = styled(Flex)<Props>`
  width: 100%;
`;

export const HeaderText = styled(Text)<Props>`
  font-weight: 700;
  color: ${colors.sidebarHoverItem};
  font-size: 0.875rem;
  text-transform: uppercase;
  padding-left: ${padding.md};
`;

export const AccountTableBody = styled(Flex)<Props>`
  margin-top: ${margin.md};
`;

export const FlexColumn = styled(Flex)<Props>`
  flex-direction: column;

  padding-left: ${padding.md};
  gap: 0.5rem;
`;

export const FlexDiv = styled(Flex)<Props>`
  align-items: center;
  gap: 0.3rem;
`;
export const AccountTableItem = styled(Flex)<Props>``;

export const BlueText = styled(Text)<Props>`
  color: ${colors.borderBlue};
`;
export const NormalText = styled(Text)<Props>`
  color: ${colors.black};
  font-weight: 500;
`;

export const EditIcon = styled(Icon)<Props>``;

export const VerticalLine = styled(Flex)<Props>`
  background-color: ${colors.orange};
`;
