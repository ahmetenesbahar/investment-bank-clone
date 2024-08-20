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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${margin.xl};
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${colors.borderColor};
`;

export const Th = styled.th`
  background-color: ${colors.tableBackground};
  padding: ${padding.sm} ${padding.xl};
  text-align: left;
  color: ${colors.sidebarSubTitle};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const ThCenter = styled.th`
  background-color: ${colors.tableBackground};
  padding: ${padding.sm} ${padding.xl};
  text-align: center;
  color: ${colors.sidebarSubTitle};
  font-size: 0.875rem;
  font-weight: 600;
`;
export const Td = styled.td`
  padding: ${padding.sm} ${padding.xl};
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
`;
export const TdCenter = styled.td`
  padding: ${padding.sm} ${padding.xl};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
`;
export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const FlexBetween = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding: 0.2rem 0;
`;

export const TableDiv = styled(Flex)`
  width: 100%;
  margin-top: ${margin.md};
  flex-direction: column;
`;

export const HeaderText = styled(Text)`
  color: ${colors.sidebarSubTitle};
  font-size: 0.875rem;
`;

export const NormalText = styled(Text)`
  color: ${colors.black};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const TableItem = styled(Flex)<Props>`
  padding: ${padding.md};
  width: 100%;
  border-bottom: 1px solid ${colors.borderColor};
  flex-direction: column;
`;
