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

export const SearchbarContainer = styled(Flex)<Props>`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 24.25rem;
  @media (max-width: ${breakpoints.md}px) {
    max-width: none;
  }
`;

export const Input = styled.input<Props>`
  width: 100%;
  border: 1px solid ${colors.borderColor};
  padding: 0.625rem;
  padding-right: 3.5rem;
  font-size: 0.875rem;
`;

export const SearchIcon = styled(Icon)<Props>`
  position: absolute;
  right: 0.5rem;
`;

export const SearchCloseIcon = styled(Icon)<Props>`
  position: absolute;
  right: 2rem;
  display: ${(props) => (props.active ? "block" : "none")};
`;
