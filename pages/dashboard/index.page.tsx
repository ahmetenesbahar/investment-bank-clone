import React from "react";
import { NextPage } from "next";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { Container, Flex } from "@/styles/styles";

import { TabProvider } from "./context/TabContext";
import { PageProvider } from "./context/PageContext";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const Dashboard: NextPage = () => {
  return (
    <PageProvider>
      <TabProvider>
        <Container backgroundColor="#f2f2f2">
          <Navbar />
          <Flex>
            <Sidebar />
            <Main />
          </Flex>
        </Container>
      </TabProvider>
    </PageProvider>
  );
};

export default Dashboard;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
