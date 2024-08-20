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
  TableDiv,
  FlexBetween,
  HeaderText,
  NormalText,
  TableItem,
} from "./TransactionTable.styles";
import { breakpoints } from "@/utils/constants";
import useUser from "@/hooks/useGetUser";
import { useFilter } from "../../context/FilterContext";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Transaction {
  date: string;
  amount: string;
  description: string;
  channel: string;
}

const TransactionTable: React.FC = () => {
  const user = useUser();
  const { filterData } = useFilter();
  const width = useMediaQuery();

  const filteredData = user?.lastTransactions?.filter(
    (transaction: Transaction) =>
      filterData === "all" || filterData === transaction.channel
  );

  return (
    <React.Fragment>
      {width > breakpoints.md ? (
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
            {filteredData?.map((transaction: Transaction, index: number) => (
              <Tr key={index}>
                <TdCenter>{transaction.date}</TdCenter>
                <TdCenter>{transaction.amount}</TdCenter>
                <Td>{transaction.description}</Td>
                <TdCenter>{transaction.channel}</TdCenter>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <TableDiv>
          {filteredData?.map((transaction: Transaction, index: number) => (
            <TableItem key={index}>
              <FlexBetween>
                <HeaderText>İşlem Tarihi</HeaderText>
                <NormalText>{transaction.date}</NormalText>
              </FlexBetween>
              <FlexBetween>
                <HeaderText>İşlem Tutarı</HeaderText>
                <NormalText>{transaction.amount}</NormalText>
              </FlexBetween>
              <FlexBetween>
                <HeaderText>İşlem Açıklaması</HeaderText>
                <NormalText>{transaction.description}</NormalText>
              </FlexBetween>
              <FlexBetween>
                <HeaderText>Kanal</HeaderText>
                <NormalText>{transaction.channel}</NormalText>
              </FlexBetween>
            </TableItem>
          ))}
        </TableDiv>
      )}
    </React.Fragment>
  );
};

export default TransactionTable;
