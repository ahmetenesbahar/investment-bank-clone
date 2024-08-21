import React from "react";
import { NextPage } from "next";

import Layout from "@/components/Layout";
import Content from "./components/Content";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { FilterProvider } from "./context/FilterContext";
import { ItemProvider } from "./context/ItemContext";

const Receipts: NextPage = () => {
  return (
    <ItemProvider>
      <FilterProvider>
        <Layout>
          <Content />
        </Layout>
      </FilterProvider>
    </ItemProvider>
  );
};

export default Receipts;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
