import { NextPage } from "next";
import React from "react";
import Navbar from "./components/Navbar";
import ForgotPasswordMain from "./components/ForgotPasswordMain";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { Container, ForgotPasswordContainer, Flex } from "@/styles/styles";

import { TabProvider } from "./context/TabContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { colors } from "@/styles/colors";

const queryClient = new QueryClient();

const ForgotPasswordPage: NextPage = () => {
  return (
    <TabProvider>
      <QueryClientProvider client={queryClient}>
        <Container backgroundColor={colors.secondaryWhite}>
          <Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            backgroundColor={colors.white}
          >
            <Navbar />
          </Flex>
          <ForgotPasswordContainer
            justifyContent="center"
            margin="2.5rem 0 0 0"
          >
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
