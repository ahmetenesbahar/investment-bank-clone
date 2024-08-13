import React from "react";
import { NextPage } from "next";

import Main from "./components/Main";
import Layout from "@/components/Layout";

import { TabProvider } from "./context/TabContext";
import { PageProvider } from "./context/PageContext";
import { DateProvider } from "./context/DateContext";
import { ModalProvider } from "./context/ModalContext";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const Dashboard: NextPage = () => {
  return (
    <DateProvider>
      <ModalProvider>
        <PageProvider>
          <TabProvider>
            <Layout>
              <Main />
            </Layout>
          </TabProvider>
        </PageProvider>
      </ModalProvider>
    </DateProvider>
  );
};

export default Dashboard;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
