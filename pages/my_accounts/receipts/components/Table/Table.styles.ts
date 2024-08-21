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
  marginBottom?: string;
}

export const TableDiv = styled.table<Props>`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${margin.xl};
`;
export const Th = styled.th<Props>`
  color: ${colors.sidebarSubTitle};
  padding: ${padding.sm} ${padding.xl};
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
`;
export const ThPadding = styled.th<Props>`
  color: ${colors.sidebarSubTitle};
  padding: ${padding.sm} ${padding.xl};
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
  padding-left: 3.5rem;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const ThCenter = styled.th<Props>`
  color: ${colors.sidebarSubTitle};
  padding: ${padding.sm} ${padding.xl};
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
`;
export const Tr = styled.tr<Props>`
  border-bottom: 1px solid ${colors.borderColor};
  height: 3.875rem;
  cursor: pointer;
`;
export const Td = styled.td<Props>`
  padding: ${padding.sm} ${padding.xl};
`;
export const TdRight = styled.td<Props>`
  padding: ${padding.sm} ${padding.xl};
  text-align: center;
  position: relative;
`;
export const Thead = styled.thead<Props>`
  background-color: ${colors.tableBackground};
  border-bottom: 1px solid ${colors.borderColor};
  padding-right: ${padding.xxl};
`;
export const Tbody = styled.tbody<Props>``;

export const FlexColumn = styled(Flex)<Props>`
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
`;
export const MiniText = styled(Text)<Props>`
  font-size: 0.75rem;
  cursor: pointer;
`;
export const BoldText = styled(Text)<Props>`
  font-weight: 700;
  font-size: 0.875rem;
  color: ${colors.black};
  text-align: center;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  cursor: pointer;
`;

export const CheckBox = styled(Flex)<Props>`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${colors.borderColor};
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "#009ff2" : "transparent"}; // Background color if checked
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &::after {
    content: ${(props) =>
      props.active ? '"✓"' : '""'}; // Display check mark if checked
    color: ${colors.white}; // Ensure the tick is white
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const FlexDiv = styled(Flex)<Props>`
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ReceiptIcon = styled(Icon)<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
`;
export const NormalText = styled(Text)<Props>`
  color: ${colors.black};
  font-weight: 500;
  padding-left: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
