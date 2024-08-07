import React, { useState } from "react";
import { Flex, Text, Table, Td, Th, Tr, Button } from "@/styles/styles";
import useUser from "@/hooks/useGetUser";
import { usePage } from "../context/PageContext";
import SelectBox from "./SelectBox";
import { useTranslation } from "next-i18next";

const EditAccounts: React.FC = () => {
  const { t } = useTranslation();
  const user = useUser();
  console.log(user);

  const { handlePageChange } = usePage();

  const accountTypes = [
    { label: `${t("Current TL")}`, value: "vadesizTl" },
    { label: `${t("Current FC")}`, value: "vadesizDoviz" },
    { label: `${t("Current Gold")}`, value: "vadesizAltın" },
  ];

  const accountNumbers = user?.accounts.map((account: any) => {
    const last11 = account?.iban.slice(-11);
    return {
      label: `${last11.slice(0, 4)}-${last11.slice(4)}`,
      value: account?.iban,
    };
  });

  return (
    <Flex flexDirection="column" width="100%">
      <Table>
        <thead>
          <Tr borderBottom="1px solid #e5e5e5 ">
            <Th width="206px">{t("Account Type")}</Th>
            <Th width="298">{t("Nickname / Account Number")}</Th>
            <Th width="225px">{t("Net Balance")}</Th>
          </Tr>
        </thead>
        <tbody>
          {user?.accounts.map((account: any, index: number) => (
            <React.Fragment key={index}>
              <Tr borderBottom="1px solid #e5e5e5 ">
                <Td padding="15px">
                  <SelectBox
                    options={accountTypes}
                    width="133px"
                    defaultValue={accountTypes[0]}
                  />
                </Td>
                <Td padding="15px">
                  <SelectBox
                    options={accountNumbers}
                    width="200px"
                    defaultValue={accountNumbers[0]}
                  />
                </Td>
                <Td>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <Flex gap="4px" cursor="pointer">
                      <Text fontWeight="450" color="#000" cursor="pointer">
                        {account.balance}
                      </Text>
                      <Text fontWeight="450" color="#000" cursor="pointer">
                        {account.currency}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
            </React.Fragment>
          ))}
          <Tr borderBottom="1px solid #e5e5e5 ">
            <Td padding="15px">
              <SelectBox options={accountTypes} width="133px" />
            </Td>
            <Td padding="15px">
              <SelectBox options={accountNumbers} width="200px" />
            </Td>
          </Tr>
        </tbody>
      </Table>
      <Flex
        width="100%"
        alignItems="center"
        padding="10px 0 10px 15px"
        borderBottom="1px solid #e5e5e5 "
        gap="10px"
      >
        <Button
          backgroundColor="#f34509"
          color="#fff"
          border="1px solid #C1C9D3"
          padding="0.6rem 2rem"
          width="120px"
          onClick={() => {
            handlePageChange("");
          }}
        >
          {t("Save")}
        </Button>
        <Button
          border="1px solid #C1C9D3"
          backgroundColor="transparent"
          padding="0.6rem 2rem"
          width="120px"
          onClick={() => {
            handlePageChange("");
          }}
        >
          <Text color="#69a6e1" cursor="pointer" textAlign="center">
            {t("Cancel")}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditAccounts;
