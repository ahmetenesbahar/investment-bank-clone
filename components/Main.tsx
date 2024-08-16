import React, { ReactNode } from "react";
import { DashboardMainContainer } from "@/styles/styles";
import { colors } from "@/styles/colors";
interface LayoutProps {
  children: ReactNode;
}
const Main: React.FC<LayoutProps> = ({ children }) => {
  return (
    <DashboardMainContainer backgroundColor={colors.white}>
      {children}
    </DashboardMainContainer>
  );
};

export default Main;
