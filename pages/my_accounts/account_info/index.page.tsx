import React from "react";
import { NextPage } from "next";

import Layout from "@/components/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const AccountInfo: NextPage = () => {
  return <Layout>asd</Layout>;
};

export default AccountInfo;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
