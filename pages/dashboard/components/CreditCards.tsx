import React from "react";
import { Flex, Table, Text, Th, Tr, Td } from "@/styles/styles";
import { useTranslation } from "next-i18next";

const CreditCards: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="225px"
      borderBottom={"1px solid #e5e5e5 "}
    >
      <Table>
        <thead>
          <Tr borderBottom={"1px solid #e5e5e5 "}>
            <Th>{t("Card Number")}</Th>
            <Th>{t("Card Type")}</Th>
            <Th>{t("Available Limit")}</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td colSpan={3} borderBottom="1px solid #e5e5e5 " padding="15px">
              <Flex alignItems="center">
                <Text fontWeight="450" color="#000">
                  {t("Your card information cannot be displayed.")}
                </Text>
              </Flex>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Flex>
  );
};

export default CreditCards;
