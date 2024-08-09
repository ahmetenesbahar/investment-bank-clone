import React from "react";
import Calendar from "./Calendar";
import {
  Flex,
  Icon,
  Text,
  Button,
  FullBorderFlex,
  CenteredFlex,
} from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

const DashboardRight: React.FC = () => {
  const { t } = useTranslation();
  const width = useMediaQuery();
  return (
    <CenteredFlex
      flexDirection="column"
      borderBottom={`0.063rem solid ${colors.borderColor}`}
      width={width < breakpoints.md ? "100%" : "auto"}
    >
      {width < breakpoints.xl && (
        <Flex width="100%" padding="0 1.25rem">
          <Text fontWeight="700" color={colors.secondaryBlue}>
            {t("My Agenda")}
          </Text>
        </Flex>
      )}
      <Calendar />
      <Flex padding="0 0.75rem 1.25rem 0.75rem" width="100%" zIndex="0">
        <FullBorderFlex
          border={`0.063rem solid  ${colors.borderColor}`}
          padding="0.625rem 1.25rem "
          gap="0.625rem"
          width="100%"
          cursor="pointer"
        >
          <Icon src="/assets/plus_blue.png" alt="plus_icon" />
          <Button backgroundColor={colors.white} padding="0">
            <Text
              fontSize="0.875rem"
              fontWeight="600"
              color={colors.textBlue}
              cursor="pointer"
            >
              {t("Add Note")}
            </Text>
          </Button>
        </FullBorderFlex>
      </Flex>
    </CenteredFlex>
  );
};

export default DashboardRight;
