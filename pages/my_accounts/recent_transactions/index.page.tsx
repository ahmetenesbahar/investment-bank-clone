import React from "react";
import { NextPage } from "next";

import Layout from "@/components/Layout";
import Content from "./components/Content";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const RecentTransactions: NextPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default RecentTransactions;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
