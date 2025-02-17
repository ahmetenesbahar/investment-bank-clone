import React from "react";
import { NextPage } from "next";

import Layout from "@/components/Layout";

import { TabProvider } from "./context/TabContext";
import { DateProvider } from "../../context/DateContext";
import { ModalProvider } from "./context/ModalContext";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import DashboardMain from "./components/DashboardMain";

const Dashboard: NextPage = () => {
  return (
    <DateProvider>
      <ModalProvider>
        <TabProvider>
          <Layout>
            <DashboardMain />
          </Layout>
        </TabProvider>
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
