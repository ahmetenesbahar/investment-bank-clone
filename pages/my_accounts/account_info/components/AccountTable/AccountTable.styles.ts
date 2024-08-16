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
  opacity?: string;
}

export const AccountTableContainer = styled(Flex)<Props>`
  flex-direction: column;
  margin-top: ${margin.lg};
  width: 100%;
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
  width: 100%;
  flex-direction: column;
`;

export const FlexColumn = styled(Flex)<Props>`
  flex-direction: column;
  padding-left: ${padding.md};
  gap: 0.2rem;
  cursor: pointer;
`;

export const FlexDiv = styled(Flex)<Props>`
  width: 100%;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;
export const AccountTableItem = styled(Flex)<Props>`
  width: 100%;
  flex-direction: column;
  position: relative;
  border: 1px solid ${colors.borderColor};
  justify-content: space-between;
  padding: ${padding.sm};
  height: 3.5rem;
  cursor: pointer;
  margin-top: 0.1rem;
  ${({ active }) =>
    active &&
    `
    border: 1px solid ${colors.borderBlue};
    height: 6.125rem;
  `}

  @media (max-width: ${breakpoints.md}px) {
    height: 6.875rem;
    justify-content: flex-start;
  }
`;

export const BlueText = styled(Text)<Props>`
  color: ${colors.borderBlue};
  cursor: pointer;
`;
export const NormalText = styled(Text)<Props>`
  color: ${colors.black};
  font-weight: 500;
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  cursor: pointer;
  text-transform: capitalize;
`;
export const BoldText = styled(Text)<Props>`
  font-weight: 700;
  color: ${colors.black};
  cursor: pointer;
`;

export const EditIcon = styled(Icon)<Props>`
  @media (max-width: ${breakpoints.md}px) {
    transform: rotate(-90deg);
  }
`;
export const ResponsiveText = styled(Text)<Props>`
  font-weight: 600;
  color: ${colors.secondaryBlue};
`;

export const VerticalLine = styled(Flex)<Props>`
  background-color: ${colors.orange};
  position: absolute;
  top: 0;
  left: 1px;
  width: 0.3rem;
  height: 3.5rem;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    height: 6rem;
  `}

  @media (max-width: ${breakpoints.md}px) {
    height: 6.8rem;
  }
`;

export const AccountTableItemDetail = styled(Flex)<Props>`
  width: 100%;
  align-items: center;

  padding-right: 0 ${padding.md};
  cursor: pointer;
  margin-top: 0.1rem;
`;

export const CenteredFlex = styled(Flex)<Props>`
  align-items: center;
  gap: 0.313rem;
`;

export const GrayLine = styled(Flex)<Props>`
  width: 1px;
  background-color: ${colors.borderColor};
`;
