import { NextPage } from "next";
import "@/app/globals.css";
import { Container, FlexColumn, Flex } from "@/styles/styles";

import LoginSidebar from "@/components/LoginSidebar";
import LoginMain from "@/components/LoginMain";

const LoginPage: NextPage = () => {
  return (
    <Container>
      <Flex>
        <LoginSidebar />
        <LoginMain />
      </Flex>
    </Container>
  );
};

export default LoginPage;
