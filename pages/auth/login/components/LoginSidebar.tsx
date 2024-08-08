import React from "react";
import { LoginSidebarContainer, LoginLogoContainer } from "@/styles/styles";
const LoginSidebar: React.FC = () => {
  return (
    <LoginSidebarContainer>
      <LoginLogoContainer>
        <img
          src="https://www.isbank.com.tr/Internet/omni/assets/img/logo.png"
          alt="isbankLogo"
        />
      </LoginLogoContainer>
    </LoginSidebarContainer>
  );
};

export default LoginSidebar;
