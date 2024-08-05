import React from "react";
import { Flex } from "@/styles/styles";
import LeftHeader from "./LeftHeader";
import Balance from "./Balance";
import EditAccounts from "./EditAccounts";
import { usePage } from "../context/PageContext";
import ChartTab from "./ChartTab";

const DashboardLeft: React.FC = () => {
  const { page } = usePage();
  return (
    <Flex
      borderRight="1px solid #e5e5e5 "
      // width="620px"
      padding="0 20px 0 0"
      flexDirection="column"
    >
      <LeftHeader />
      {page === "editAccounts" ? <EditAccounts /> : <Balance />}
      <ChartTab />
    </Flex>
  );
};

export default DashboardLeft;
