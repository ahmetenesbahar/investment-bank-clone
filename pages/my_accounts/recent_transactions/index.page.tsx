import React from "react";
import { NextPage } from "next";

import Layout from "@/components/Layout";
import Content from "./components/Content";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { FilterProvider } from "./context/FilterContext";

const RecentTransactions: NextPage = () => {
  return (
    <FilterProvider>
      <Layout>
        <Content />
      </Layout>
    </FilterProvider>
  );
};

export default RecentTransactions;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});