import React from "react";
import { FlexColumn, SecondaryHeaderForgotPassword } from "@/styles/styles";
import { useTranslation } from "next-i18next";
import { colors } from "@/styles/colors";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FlexColumn width="100%">
      <SecondaryHeaderForgotPassword
        fontWeight="600"
        borderBottom={`0.063rem solid ${colors.borderColor}`}
        padding="0 0 1.25rem 0"
      >
        {t("Instant PIN")}
      </SecondaryHeaderForgotPassword>
    </FlexColumn>
  );
};

export default Header;
