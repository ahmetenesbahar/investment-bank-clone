import React from "react";
import { NextPage } from "next";

import { ContentContainer } from "@/styles/styles";

import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import TableHeader from "./TableHeader/TableHeader";
import Table from "./Table/Table";

const Content: NextPage = () => {
  return (
    <ContentContainer flexDirection="column" padding="1.25rem" width="100%">
      <Header />
      <Filter />
      <TableHeader />
      <Table />
    </ContentContainer>
  );
};

export default Content;
