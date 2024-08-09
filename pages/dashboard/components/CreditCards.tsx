import React from "react";
import { Flex, Table, Text, Th, Tr, Td } from "@/styles/styles";
import { useTranslation } from "next-i18next";
import { colors } from "@/styles/colors";

const CreditCards: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="14.063rem"
      borderBottom={`0.063rem solid ${colors.borderColor}`}
    >
      <Table>
        <thead>
          <Tr borderBottom={`0.063rem solid ${colors.borderColor}`}>
            <Th>{t("Card Number")}</Th>
            <Th>{t("Card Type")}</Th>
            <Th>{t("Available Limit")}</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td
              colSpan={3}
              borderBottom={`0.063rem solid ${colors.borderColor}`}
              padding="0.938rem"
            >
              <Flex alignItems="center">
                <Text fontWeight="450" color={colors.black}>
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
