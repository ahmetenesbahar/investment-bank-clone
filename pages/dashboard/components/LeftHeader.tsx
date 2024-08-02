import React from "react";
import {
  Flex,
  Text,
  VerticalLine,
  Button,
  Icon,
  FullBorderFlex,
} from "@/styles/styles";
import { useTab } from "../context/TabContext";
import { useTranslation } from "next-i18next";
import { usePage } from "../context/PageContext";

const LeftHeader: React.FC = () => {
  const { tab, handleTabChange } = useTab();
  const { page } = usePage();
  const { t } = useTranslation();
  return (
    <Flex
      alignItems="center"
      width="100%"
      borderBottom="1px solid #e5e5e5"
      padding="10px 0 0 0"
      justifyContent="space-between"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          padding="1rem "
          width="170px"
          cursor="pointer"
          borderBottom={tab === "hesaplarım" ? "2px solid #1c345c" : "none"}
          onClick={() => handleTabChange("hesaplarım")}
        >
          <Text
            cursor="pointer"
            color={tab === "hesaplarım" ? "#1c345c" : "#555555"}
            fontWeight={tab === "hesaplarım" ? "700" : "400"}
          >
            Hesaplarım
          </Text>
        </Flex>
        <VerticalLine height="26px" />
        <Flex
          padding="1rem"
          width="170px"
          cursor="pointer"
          borderBottom={tab === "kredi kartım" ? "2px solid #1c345c" : "none"}
          onClick={() => handleTabChange("kredi kartım")}
        >
          <Text
            cursor="pointer"
            color={tab === "kredi kartım" ? "#1c345c" : "#555555"}
            fontWeight={tab === "kredi kartım" ? "700" : "400"}
          >
            Kredi Kartlarım
          </Text>
        </Flex>
        <VerticalLine height="26px" />
      </Flex>
      {page !== "editAccounts" && (
        <Flex padding="0 0 6px 0">
          <FullBorderFlex
            justifyContent="center"
            alignItems="center"
            border="1px solid #C1C9D3"
            padding="10px "
            gap="10px"
            cursor="pointer"
          >
            <Icon src="/assets/plus_blue.png" />
            <Button backgroundColor="#fff" padding="0">
              <Text
                fontSize="14px"
                fontWeight="600"
                color="#69a6e1"
                cursor="pointer"
              >
                Vadeli Hesap Aç
              </Text>
            </Button>
          </FullBorderFlex>
        </Flex>
      )}
    </Flex>
  );
};

export default LeftHeader;
