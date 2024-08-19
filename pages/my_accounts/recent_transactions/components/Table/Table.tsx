import React from "react";
import {
  TableItemRow,
  TableContainer,
  TableDiv,
  TableFlex,
  TableText,
} from "./Table.styles";

import useUser from "@/hooks/useGetUser";

interface Transaction {
  date: string;
  amount: string;
  description: string;
  channel: string;
}

const Table: React.FC = () => {
  const user = useUser();

  return (
    <TableContainer>
      {user?.lastTransactions?.map(
        (transaction: Transaction, index: number) => (
          <TableItemRow key={index}>
            <TableFlex>
              <TableText>{transaction.date}</TableText>
              <TableText>{transaction.amount}</TableText>
              <TableText>{transaction.description}</TableText>
              <TableText>{transaction.channel}</TableText>
            </TableFlex>
          </TableItemRow>
        )
      )}
    </TableContainer>
  );
};

export default Table;
