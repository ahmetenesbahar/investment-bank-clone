import React from "react";
import Calendar from "./Calendar";
import { Flex, Icon, Text, Button, FullBorderFlex } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";

const DashboardRight: React.FC = () => {
  const { t } = useTranslation();
  const width = useMediaQuery();
  return (
    <Flex
      flexDirection="column"
      borderBottom="1px solid #e5e5e5 "
      justifyContent="center"
      width={width < 768 ? "100%" : "auto"}
      alignItems="center"
    >
      {width < 1280 && (
        <Flex width="100%" padding="0 20px">
          <Text fontWeight="700" color="#1c345c">
            {t("My Agenda")}
          </Text>
        </Flex>
      )}
      <Calendar />
      <Flex padding="0 12px 20px 12px" width="100%" zIndex="0">
        <FullBorderFlex
          justifyContent="center"
          alignItems="center"
          border="1px solid #C1C9D3"
          padding="10px 20px "
          gap="10px"
          width="100%"
          cursor="pointer"
        >
          <Icon src="/assets/plus_blue.png" alt="plus_icon" />
          <Button backgroundColor="#fff" padding="0">
            <Text
              fontSize="14px"
              fontWeight="600"
              color="#69a6e1"
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
