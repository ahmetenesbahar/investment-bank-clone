import React from "react";
import { NextPage } from "next";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Account from "./Account/Account";
import { Flex } from "@/styles/styles";

const Content: NextPage = () => {
  return (
    <Flex flexDirection="column" padding="1.25rem">
      <Header />
      <Filter />
      <Account />
    </Flex>
  );
};

export default Content;
