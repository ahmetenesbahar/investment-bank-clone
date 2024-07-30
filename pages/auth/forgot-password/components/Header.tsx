import React from "react";
import { FlexColumn, SecondaryHeaderForgotPassword } from "@/styles/styles";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FlexColumn width="100%">
      <SecondaryHeaderForgotPassword
        fontWeight="600"
        borderBottom="1px solid #e5e5e5"
        padding="0 0 20px 0"
      >
        {t("Instant PIN")}
      </SecondaryHeaderForgotPassword>
    </FlexColumn>
  );
};

export default Header;
