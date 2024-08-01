import React from "react";
import { Flex } from "@/styles/styles";
import LeftHeader from "./LeftHeader";

const DashboardLeft: React.FC = () => {
  return (
    <Flex borderRight="1px solid #e5e5e5 " width="620px" padding="0 20px 0 0">
      <LeftHeader />
    </Flex>
  );
};

export default DashboardLeft;
