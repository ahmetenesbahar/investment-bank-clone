import React from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import { Flex } from "@/styles/styles";

const DashboardMain: React.FC = () => {
  return (
    <Flex>
      <DashboardLeft />
      <DashboardRight />
    </Flex>
  );
};

export default DashboardMain;
