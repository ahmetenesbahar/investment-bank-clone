import { NextPage } from "next";
import "@/app/globals.css";
import { Container, Flex } from "@/styles/styles";

import LoginSidebar from "@/components/LoginSidebar";
import LoginMain from "@/components/LoginMain";

const LoginPage: NextPage = () => {
  return (
    <Container>
      <LoginSidebar />
      <LoginMain />
    </Container>
  );
};

export default LoginPage;
