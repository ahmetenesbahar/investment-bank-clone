import React from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import { DashboardMainContainer } from "@/styles/styles";

const Main: React.FC = () => {
  return (
    <DashboardMainContainer
      backgroundColor="#fff"
      width="960px"
      height="632px"
      margin="40px 20px 40px 10px"
    >
      <DashboardLeft />
      <DashboardRight />
    </DashboardMainContainer>
  );
};

export default Main;
