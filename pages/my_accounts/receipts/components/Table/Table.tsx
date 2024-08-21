import React, { useEffect, useState } from "react";
import {
  TableDiv,
  Th,
  ThCenter,
  Tr,
  Td,
  Thead,
  Tbody,
  FlexColumn,
  MiniText,
  BoldText,
  CheckBox,
  FlexDiv,
  TdRight,
  ThPadding,
  ReceiptIcon,
  NormalText,
} from "./Table.styles";
import useUser from "@/hooks/useGetUser";
import { useItem } from "../../context/ItemContext";

interface Receipt {
  date: string;
  channel: string;
  type: string;
  amount: string;
  currency: string;
  receipt: string;
}

const Table: React.FC = () => {
  const user = useUser();
  const { checkedItems, handleCheckBoxClick } = useItem();

  return (
    <TableDiv>
      <Thead>
        <ThPadding width="15rem">Tarih/Kanal</ThPadding>
        <Th>İşlem Tipi</Th>
        <ThCenter>Tutar</ThCenter>
      </Thead>
      <Tbody>
        {user?.receipts?.map((receipt: Receipt, index: number) => (
          <Tr
            key={index}
            onClick={() => {
              handleCheckBoxClick(index);
            }}
          >
            <Td>
              <FlexDiv>
                <CheckBox active={checkedItems.has(index)} />
                <FlexColumn>
                  <BoldText>{receipt.date}</BoldText>
                  <MiniText>{receipt.channel}</MiniText>
                </FlexColumn>
              </FlexDiv>
            </Td>
            <Td>
              <NormalText>{receipt.type}</NormalText>
            </Td>
            <TdRight>
              <BoldText marginBottom="1rem">
                {receipt.amount} {receipt.currency}
              </BoldText>
              <ReceiptIcon src="/assets/receipt.png" alt="receiptIcon" />
            </TdRight>
          </Tr>
        ))}
      </Tbody>
    </TableDiv>
  );
};

export default Table;
