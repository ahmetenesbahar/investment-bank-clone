import { NextPage } from "next";
import React from "react";
import Navbar from "./components/Navbar";
import ForgotPasswordMain from "./components/ForgotPasswordMain";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { Container, ForgotPasswordContainer, Flex } from "@/styles/styles";

import { TabProvider } from "./context/TabContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ForgotPasswordPage: NextPage = () => {
  return (
    <TabProvider>
      <QueryClientProvider client={queryClient}>
        <Container backgroundColor="#f2f2f2">
          <Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            backgroundColor="#fff"
          >
            <Navbar />
          </Flex>
          <ForgotPasswordContainer justifyContent="center" margin="40px 0 0 0">
            <ForgotPasswordMain />
          </ForgotPasswordContainer>
        </Container>
      </QueryClientProvider>
    </TabProvider>
  );
};

export default ForgotPasswordPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});
