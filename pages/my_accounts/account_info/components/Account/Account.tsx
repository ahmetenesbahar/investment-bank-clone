import React from "react";
import {
  AccountContainer,
  FlexContainer,
  HeaderDiv,
  HeaderText,
  HeaderIcon,
} from "./Account.styles";
import AccountTable from "../AccountTable/AccountTable";

const Account: React.FC = () => {
  return (
    <AccountContainer>
      <HeaderDiv>
        <FlexContainer gap="4rem">
          <HeaderText>Hesap Adı / Tipi</HeaderText>
          <HeaderText>Şube / IBAN</HeaderText>
        </FlexContainer>
        <FlexContainer justifyContent="flex-end" gap="1.5rem">
          <HeaderText>Bakiye</HeaderText>
          <HeaderIcon src="/assets/lower_double_arrow.png" alt="lowerArrow" />
        </FlexContainer>
      </HeaderDiv>
      <AccountTable />
    </AccountContainer>
  );
};

export default Account;
