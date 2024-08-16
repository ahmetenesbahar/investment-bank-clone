import React from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import { Flex } from "@/styles/styles";

const DashboardMain: React.FC = () => {
  return (
    <>
      <DashboardLeft />
      <DashboardRight />
    </>
  );
};

export default DashboardMain;
