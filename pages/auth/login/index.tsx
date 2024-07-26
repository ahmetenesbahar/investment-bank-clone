import { NextPage } from "next";
import { Container, Flex } from "@/styles/styles";
import LoginSidebar from "@/pages/auth/login/components/LoginSidebar";
import LoginMain from "./components/LoginMain";

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
