import React from "react";
import Calendar from "./Calendar";
import { Flex, Icon, Text, Button, FullBorderFlex } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

const DashboardRight: React.FC = () => {
  const { t } = useTranslation();
  const width = useMediaQuery();
  return (
    <Flex
      flexDirection="column"
      borderBottom={`1px solid ${colors.borderColor}`}
      justifyContent="center"
      width={width < breakpoints.md ? "100%" : "auto"}
      alignItems="center"
    >
      {width < breakpoints.xl && (
        <Flex width="100%" padding="0 20px">
          <Text fontWeight="700" color={colors.secondaryBlue}>
            {t("My Agenda")}
          </Text>
        </Flex>
      )}
      <Calendar />
      <Flex padding="0 12px 20px 12px" width="100%" zIndex="0">
        <FullBorderFlex
          justifyContent="center"
          alignItems="center"
          border={`1px solid  ${colors.borderColor}`}
          padding="10px 20px "
          gap="10px"
          width="100%"
          cursor="pointer"
        >
          <Icon src="/assets/plus_blue.png" alt="plus_icon" />
          <Button backgroundColor={colors.white} padding="0">
            <Text
              fontSize="14px"
              fontWeight="600"
              color={colors.textBlue}
              cursor="pointer"
            >
              {t("Add Note")}
            </Text>
          </Button>
        </FullBorderFlex>
      </Flex>
    </Flex>
  );
};

export default DashboardRight;
