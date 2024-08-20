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
  padding-bottom: ${padding.lg};
  border-bottom: 1px solid ${colors.borderColor};

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

export const HeaderText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.secondaryBlue};
  cursor: pointer;
`;
