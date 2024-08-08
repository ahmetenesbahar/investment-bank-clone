import React from "react";
import { Flex, Text, VerticalLine } from "@/styles/styles";
import { useTab } from "../context/TabContext";
import { useTranslation } from "next-i18next";
import { colors } from "@/styles/colors";

const Tabs: React.FC = () => {
  const { tab, handleTabChange } = useTab();
  const { t } = useTranslation();
  return (
    <Flex
      alignItems="center"
      width="100%"
      borderBottom={`1px solid ${colors.borderColor}`}
    >
      <Flex
        padding="1rem 2rem"
        cursor="pointer"
        borderBottom={
          tab === "bireysel" ? `2px solid ${colors.secondaryBlue}` : "none"
        }
        onClick={() => handleTabChange("bireysel")}
      >
        <Text
          cursor="pointer"
          color={
            tab === "bireysel"
              ? `${colors.secondaryBlue}`
              : `${colors.grayText}`
          }
          fontWeight={tab === "bireysel" ? "700" : "400"}
        >
          {t("Personal")}
        </Text>
      </Flex>
      <VerticalLine height="26px" />
      <Flex
        padding="1rem 2rem"
        cursor="pointer"
        borderBottom={
          tab === "ticari" ? `2px solid ${colors.secondaryBlue}` : "none"
        }
        onClick={() => handleTabChange("ticari")}
      >
        <Text
          cursor="pointer"
          color={
            tab === "ticari" ? `${colors.secondaryBlue}` : `${colors.grayText}`
          }
          fontWeight={tab === "ticari" ? "700" : "400"}
        >
          {t("Commercial")}
        </Text>
      </Flex>
      <VerticalLine height="26px" />
    </Flex>
  );
};

export default Tabs;
