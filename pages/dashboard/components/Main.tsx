import React from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import { DashboardMainContainer } from "@/styles/styles";
import { colors } from "@/styles/colors";

const Main: React.FC = () => {
  return (
    <DashboardMainContainer
      backgroundColor={colors.white}
      margin="2.5rem 1.25rem 2.5rem 0.625rem"
    >
      <DashboardLeft />
      <DashboardRight />
    </DashboardMainContainer>
  );
};

export default Main;
