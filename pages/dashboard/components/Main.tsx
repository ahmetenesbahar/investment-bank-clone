import React from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";
import { DashboardMainContainer } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";

const Main: React.FC = () => {
  const width = useMediaQuery();
  return (
    <DashboardMainContainer backgroundColor="#fff" margin="40px 20px 40px 10px">
      <DashboardLeft />
      <DashboardRight />
    </DashboardMainContainer>
  );
};

export default Main;
