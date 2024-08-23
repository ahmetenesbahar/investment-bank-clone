import React, { useEffect } from "react";
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
import { useFilter } from "../../context/FilterContext";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import Dayjs from "dayjs";

Dayjs.extend(isSameOrAfter);
Dayjs.extend(isSameOrBefore);

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
  const {
    currencyFilter,
    channelFilter,
    transactionTypeFilter,
    amountRange,
    startDate,
    endDate,
  } = useFilter();

  const formattedStartDate = startDate.format("DD/MM/YYYY");
  const formattedEndDate = endDate.format("DD/MM/YYYY");

  useEffect(() => {
    console.log(
      currencyFilter,
      channelFilter,
      transactionTypeFilter,
      amountRange,
      formattedStartDate,
      formattedEndDate
    );
  }, [
    formattedStartDate,
    formattedEndDate,
    currencyFilter,
    channelFilter,
    transactionTypeFilter,
    amountRange,
  ]);

  const currencyFilters = Array.isArray(currencyFilter)
    ? currencyFilter
    : [currencyFilter];
  const channelFilters = Array.isArray(channelFilter)
    ? channelFilter
    : [channelFilter];
  const transactionFilters = Array.isArray(transactionTypeFilter)
    ? transactionTypeFilter
    : [transactionTypeFilter];

  const filteredReceipts = user?.receipts.filter((receipt: Receipt) => {
    const isCurrencyMatch =
      !currencyFilters.length || currencyFilters.includes(receipt.currency);

    const isChannelMatch =
      !channelFilters.length || channelFilters.includes(receipt.channel);

    const isTransactionTypeMatch =
      !transactionFilters.length || transactionFilters.includes(receipt.type);
    const cleanedDate = receipt.date.trim();
    const receiptDate = Dayjs(cleanedDate, "DD/MM/YYYY");
    console.log("Receipt Date:", receiptDate.format("DD/MM/YYYY"));
    console.log("Start Date:", formattedStartDate);
    console.log("End Date:", formattedEndDate);

    const isDateInRange =
      Dayjs(receipt.date, "DD/MM/YYYY").isSameOrAfter(
        Dayjs(startDate, "DD/MM/YYYY"),
        "day"
      ) &&
      Dayjs(receipt.date, "DD/MM/YYYY").isSameOrBefore(
        Dayjs(endDate, "DD/MM/YYYY"),
        "day"
      );

    console.log({
      receiptDate: receipt.date,
      isDateInRange,
      formattedStartDate,
      formattedEndDate,
    });

    const isAmountInRange =
      (!amountRange[0] ||
        parseFloat(receipt.amount) >= parseFloat(amountRange[0])) &&
      (!amountRange[1] ||
        parseFloat(receipt.amount) <= parseFloat(amountRange[1]));

    return (
      isCurrencyMatch && isChannelMatch && isTransactionTypeMatch
      // isDateInRange &&
      // isAmountInRange
    );
  });

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
            {filteredReceipts?.map((receipt: Receipt, index: number) => (
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
          {filteredReceipts?.map((receipt: Receipt, index: number) => (
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
                  <BoldText marginBottom="1rem" margin="0 2rem 0 0">
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
