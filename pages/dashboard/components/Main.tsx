import React from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import { Flex } from "@/styles/styles";

const Main: React.FC = () => {
  return (
    <Flex
      backgroundColor="#fff"
      width="960px"
      height="632px"
      margin="40px 10px"
    >
      <DashboardLeft />
      <DashboardRight />
    </Flex>
  );
};

export default Main;
