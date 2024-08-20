import React from "react";
import { NextPage } from "next";
import { ContentContainer } from "@/styles/styles";

import Header from "./Header/Header";
import Filter from "./Filter/Filter";

const Content: NextPage = () => {
  return (
    <ContentContainer flexDirection="column" padding="1.25rem" width="100%">
      <Header />
      <Filter />
    </ContentContainer>
  );
};

export default Content;
