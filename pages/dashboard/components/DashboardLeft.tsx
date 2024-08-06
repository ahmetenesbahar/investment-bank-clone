import React from "react";
import { Flex } from "@/styles/styles";
import LeftHeader from "./LeftHeader";
import Balance from "./Balance";
import EditAccounts from "./EditAccounts";
import { usePage } from "../context/PageContext";
import ChartTab from "./ChartTab";
import { useTab } from "../context/TabContext";
import CreditCards from "./CreditCards";

const DashboardLeft: React.FC = () => {
  const { page } = usePage();
  const { tab } = useTab();
  return (
    <Flex borderRight="1px solid #e5e5e5 " width="100%" flexDirection="column">
      <LeftHeader />
      {tab === "myCreditCards" ? (
        <CreditCards />
      ) : page === "editAccounts" ? (
        <EditAccounts />
      ) : (
        <Balance />
      )}
      <ChartTab />
    </Flex>
  );
};

export default DashboardLeft;
