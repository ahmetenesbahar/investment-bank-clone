import { NextPage } from "next";
import { Container, Flex } from "@/styles/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LoginSidebar from "@/components/LoginSidebar";
import LoginMain from "@/components/LoginMain";

const queryClient = new QueryClient();

const LoginPage: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Flex>
          <LoginSidebar />
          <LoginMain />
        </Flex>
      </Container>
    </QueryClientProvider>
  );
};

export default LoginPage;
