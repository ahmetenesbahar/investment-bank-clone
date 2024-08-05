import React, { useState } from "react";
import { Flex, Text, Table, Td, Th, Tr, Button } from "@/styles/styles";
import useUser from "@/hooks/useGetUser";
import { usePage } from "../context/PageContext";
import SelectBox from "./SelectBox";

const EditAccounts: React.FC = () => {
  const user = useUser();
  console.log(user);

  const { handlePageChange } = usePage();

  const accountTypes = [
    { label: "Vadesiz TL", value: "vadesizTl" },
    { label: "Vadesiz Döviz", value: "vadesizDoviz" },
    { label: "Vadesiz Altın", value: "vadesizAltın" },
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
            <Th width="206px">Hesap Türü</Th>
            <Th width="298">Hesap Adı / Hesap No</Th>
            <Th width="225px">Net Bakiye</Th>
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
          <Tr>
            <Td colSpan={3} borderBottom="1px solid #e5e5e5 ">
              <Flex alignItems="center">
                <Td padding="15px" width="234px">
                  <SelectBox options={accountTypes} width="133px" />
                </Td>
                <Td padding="15px">
                  <SelectBox options={accountNumbers} width="200px" />
                </Td>
              </Flex>
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
          Kaydet
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
            İptal
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default EditAccounts;
