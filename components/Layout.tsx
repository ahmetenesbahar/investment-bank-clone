import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Container, Flex } from "@/styles/styles";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { colors } from "@/styles/colors";

const queryClient = new QueryClient();

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container backgroundColor={colors.secondaryWhite}>
        <Navbar />
        <Flex>
          <Sidebar />
          {children}
        </Flex>
      </Container>
    </QueryClientProvider>
  );
};

export default Layout;
