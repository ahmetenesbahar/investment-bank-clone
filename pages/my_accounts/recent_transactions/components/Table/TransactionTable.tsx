import React from "react";

import {
  Table,
  Tr,
  Th,
  Td,
  Thead,
  ThCenter,
  Tbody,
  TdCenter,
} from "./TransactionTable.styles";
import useUser from "@/hooks/useGetUser";

interface Transaction {
  date: string;
  amount: string;
  description: string;
  channel: string;
}

const TransactionTable: React.FC = () => {
  const user = useUser();
  return (
    <Table>
      <Thead>
        <Tr>
          <ThCenter>İşlem Tarihi</ThCenter>
          <ThCenter>İşlem Tutarı</ThCenter>
          <Th>İşlem Açıklaması</Th>
          <ThCenter>Kanal</ThCenter>
        </Tr>
      </Thead>

      <Tbody>
        {user?.lastTransactions?.map(
          (transaction: Transaction, index: number) => (
            <Tr key={index}>
              <TdCenter>{transaction.date}</TdCenter>
              <TdCenter>{transaction.amount}</TdCenter>
              <Td>{transaction.description}</Td>
              <TdCenter>{transaction.channel}</TdCenter>
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
};

export default TransactionTable;
