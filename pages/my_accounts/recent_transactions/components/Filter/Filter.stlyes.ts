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

export const FilterContainer = styled(Flex)`
  flex-direction: column;
  margin-top: ${padding.lg};
  width: 100%;
`;

export const FilterText = styled(Text)`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryBlue};
`;
