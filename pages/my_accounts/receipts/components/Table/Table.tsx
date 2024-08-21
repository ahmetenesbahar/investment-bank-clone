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
  Items,
  Item,
} from "./Table.styles";
import useUser from "@/hooks/useGetUser";
import { useItem } from "../../context/ItemContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/utils/constants";

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
  const width = useMediaQuery();
  const { checkedItems, handleCheckBoxClick } = useItem();

  const dateSplitter = (date: string) => {
    const newDate = date.split(" ")[0];
    return newDate;
  };

  return (
    <React.Fragment>
      {width >= breakpoints.md ? (
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
      ) : (
        <Items>
          {user?.receipts?.map((receipt: Receipt, index: number) => (
            <Item
              key={index}
              onClick={() => {
                handleCheckBoxClick(index);
              }}
            >
              <FlexDiv>
                <CheckBox active={checkedItems.has(index)} />
                <FlexColumn>
                  <BoldText>{dateSplitter(receipt.date)}</BoldText>
                  <MiniText>
                    {receipt.channel} / {receipt.type}
                  </MiniText>
                </FlexColumn>
              </FlexDiv>
              <FlexDiv>
                <FlexDiv>
                  <BoldText marginBottom="1rem" margin="0 2rem 0  0 ">
                    {receipt.amount} {receipt.currency}
                  </BoldText>
                </FlexDiv>
                <ReceiptIcon src="/assets/receipt.png" alt="receiptIcon" />
              </FlexDiv>
            </Item>
          ))}
        </Items>
      )}
    </React.Fragment>
  );
};

export default Table;
