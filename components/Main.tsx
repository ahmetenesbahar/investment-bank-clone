import React, { ReactNode } from "react";
import DashboardLeft from "../pages/dashboard/components/DashboardLeft";
import DashboardRight from "../pages/dashboard/components/DashboardRight";
import { DashboardMainContainer } from "@/styles/styles";
import { colors } from "@/styles/colors";
interface LayoutProps {
  children: ReactNode;
}
const Main: React.FC<LayoutProps> = ({ children }) => {
  return (
    <DashboardMainContainer
      backgroundColor={colors.white}
      margin="2.5rem 1.25rem 2.5rem 0.625rem"
    >
      {children}
    </DashboardMainContainer>
  );
};

export default Main;
