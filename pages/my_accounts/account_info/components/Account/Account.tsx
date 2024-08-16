import React, { useState } from "react";
import {
  AccountContainer,
  FlexContainer,
  HeaderDiv,
  HeaderText,
  HeaderIcon,
} from "./Account.styles";
import AccountTable from "../AccountTable/AccountTable";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Account: React.FC = () => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const currentLang = router.locale;
  const handleToggleAll = () => {
    setIsAllSelected(!isAllSelected);
  };
  return (
    <AccountContainer>
      <HeaderDiv>
        <FlexContainer gap={currentLang === "en" ? "2rem" : "4rem"}>
          <HeaderText>{t("Nickname / Account Number")}</HeaderText>
          <HeaderText>{t("Branch / IBAN")}</HeaderText>
        </FlexContainer>
        <FlexContainer
          justifyContent="flex-end"
          gap="1.5rem"
          cursor="pointer"
          onClick={handleToggleAll}
        >
          <HeaderText cursor="pointer">{t("Balance")}</HeaderText>
          <HeaderIcon src="/assets/lower_double_arrow.png" alt="lowerArrow" />
        </FlexContainer>
      </HeaderDiv>
      <AccountTable isAllSelected={isAllSelected} />
    </AccountContainer>
  );
};

export default Account;
