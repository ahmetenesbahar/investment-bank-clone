import React from "react";
import { NextPage } from "next";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { Container, Flex } from "@/styles/styles";

import { TabProvider } from "./context/TabContext";
import { PageProvider } from "./context/PageContext";
import { DateProvider } from "./context/DateContext";
import { ModalProvider } from "./context/ModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { colors } from "@/styles/colors";

const queryClient = new QueryClient();

const Dashboard: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DateProvider>
        <ModalProvider>
          <PageProvider>
            <TabProvider>
              <Container backgroundColor={colors.secondaryWhite}>
                <Navbar />
                <Flex>
                  <Sidebar />
                  <Main />
                </Flex>
              </Container>
            </TabProvider>
          </PageProvider>
        </ModalProvider>
      </DateProvider>
    </QueryClientProvider>
  );
};

export default Dashboard;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
