import React from "react";
import { NextPage } from "next";
import { ContentContainer } from "@/styles/styles";
import { Flex } from "@/styles/styles";

import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Table from "./Table/Table";
import InfoBox from "./InfoBox/InfoBox";
import SelectedReceipts from "./SelectedReceipts/SelectedReceipts";
import { useItem } from "../context/ItemContext";

const Content: NextPage = () => {
  const { checkedItems } = useItem();
  return (
    <ContentContainer flexDirection="column" width="100%">
      <Flex flexDirection="column" padding="1.25rem">
        <Header />
        <Filter />
        <InfoBox />
        <Table />
      </Flex>
      {checkedItems.size > 0 && <SelectedReceipts />}
    </ContentContainer>
  );
};

export default Content;
