import React from "react";
import { NextPage } from "next";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Container, Flex } from "@/styles/styles";

const Dashboard: NextPage = () => {
  return (
    <Container backgroundColor="#f2f2f2">
      <Navbar />
      <Flex>
        <Sidebar />
        <Main />
      </Flex>
    </Container>
  );
};

export default Dashboard;
