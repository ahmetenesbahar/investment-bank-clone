import React from "react";
import { NextPage } from "next";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Account from "./Account/Account";
import { ContentContainer } from "@/styles/styles";

const Content: NextPage = () => {
  return (
    <ContentContainer flexDirection="column" padding="1.25rem" width="100%">
      <Header />
      <Filter />
      <Account />
    </ContentContainer>
  );
};

export default Content;
