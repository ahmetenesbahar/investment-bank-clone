import React, { useState } from "react";
import { Flex, Text, Table, Td, Th, Tr, Button } from "@/styles/styles";
import useUser from "@/hooks/useGetUser";
import { usePage } from "../../../context/PageContext";
import SelectBox from "./SelectBox";
import { useTranslation } from "next-i18next";
import { formatAccountNumbers } from "../utils/formatting";
import { colors } from "@/styles/colors";

const EditAccounts: React.FC = () => {
  const { t } = useTranslation();
  const user = useUser();
  const { handlePageChange } = usePage();
  const accountNumbers = formatAccountNumbers(user);

  const accountTypes = [
    { label: `${t("Current TL")}`, value: "vadesizTl" },
    { label: `${t("Current FC")}`, value: "vadesizDoviz" },
    { label: `${t("Current Gold")}`, value: "vadesizAltın" },
  ];

  return (
    <Flex flexDirection="column" width="100%">
      <Table>
        <thead>
          <Tr borderBottom={`0.063rem solid ${colors.borderColor}`}>
            <Th width="12.875rem">{t("Account Type")}</Th>
            <Th width="298">{t("Nickname / Account Number")}</Th>
            <Th width="14.063rem">{t("Net Balance")}</Th>
          </Tr>
        </thead>
        <tbody>
          {user?.accounts.map((account: any, index: number) => (
            <React.Fragment key={index}>
              <Tr borderBottom={`0.063rem solid ${colors.borderColor}`}>
                <Td padding="0.938rem">
                  <SelectBox
                    options={accountTypes}
                    width="8.313rem"
                    defaultValue={accountTypes[0]}
                  />
                </Td>
                <Td padding="0.938rem">
                  <SelectBox
                    options={accountNumbers}
                    width="12.5rem"
                    defaultValue={accountNumbers[0]}
                  />
                </Td>
                <Td>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <Flex gap="0.25rem" cursor="pointer">
                      <Text
                        fontWeight="450"
                        color={colors.black}
                        cursor="pointer"
                      >
                        {account.balance}
                      </Text>
                      <Text
                        fontWeight="450"
                        color={colors.black}
                        cursor="pointer"
                      >
                        {account.currency}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
            </React.Fragment>
          ))}
          <Tr borderBottom={`0.063rem solid ${colors.borderColor}`}>
            <Td padding="0.938rem">
              <SelectBox options={accountTypes} width="8.313rem" />
            </Td>
            <Td padding="0.938rem">
              <SelectBox options={accountNumbers} width="12.5rem" />
            </Td>
          </Tr>
        </tbody>
      </Table>
      <Flex
        width="100%"
        alignItems="center"
        padding="0.625rem 0 0.625rem 0.938rem"
        borderBottom={`0.063rem solid ${colors.borderColor}`}
        gap="0.625rem"
      >
        <Button
          backgroundColor={colors.secondaryOrange}
          color={colors.white}
          border={`0.063rem solid  ${colors.borderColor}`}
          padding="0.6rem 2rem"
          width="7.5rem"
          onClick={() => {
            handlePageChange("");
          }}
        >
          {t("Save")}
        </Button>
        <Button
          border={`0.063rem solid  ${colors.borderColor}`}
          backgroundColor="transparent"
          padding="0.6rem 2rem"
          width="7.5rem"
          onClick={() => {
            handlePageChange("");
          }}
        >
          <Text color={colors.textBlue} cursor="pointer" textAlign="center">
            {t("Cancel")}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditAccounts;
