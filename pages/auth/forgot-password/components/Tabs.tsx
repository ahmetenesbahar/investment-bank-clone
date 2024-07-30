import React from "react";
import { Flex, Text, VerticalLine } from "@/styles/styles";
import { useTab } from "../context/TabContext";
import { useTranslation } from "next-i18next";

const Tabs: React.FC = () => {
  const { tab, handleTabChange } = useTab();
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" width="100%" borderBottom="1px solid #e5e5e5">
      <Flex
        padding="1rem 2rem"
        cursor="pointer"
        borderBottom={tab === "bireysel" ? "2px solid #1c345c" : "none"}
        onClick={() => handleTabChange("bireysel")}
      >
        <Text
          cursor="pointer"
          color={tab === "bireysel" ? "#1c345c" : "#555555"}
          fontWeight={tab === "bireysel" ? "700" : "400"}
        >
          {t("Personal")}
        </Text>
      </Flex>
      <VerticalLine height="26px" />
      <Flex
        padding="1rem 2rem"
        cursor="pointer"
        borderBottom={tab === "ticari" ? "2px solid #1c345c" : "none"}
        onClick={() => handleTabChange("ticari")}
      >
        <Text
          cursor="pointer"
          color={tab === "ticari" ? "#1c345c" : "#555555"}
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
