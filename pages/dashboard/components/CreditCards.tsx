import React from "react";
import { Flex, Table, Text, Th, Tr, Td } from "@/styles/styles";

const CreditCards: React.FC = () => {
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
            <Th>Kart Numarası</Th>
            <Th>Kart Türü</Th>
            <Th>Kullanılabilir Limit</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td colSpan={3} borderBottom="1px solid #e5e5e5 " padding="15px">
              <Flex alignItems="center">
                <Text fontWeight="450" color="#000">
                  Kart bilgileriniz şu anda gösterilemiyor
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
