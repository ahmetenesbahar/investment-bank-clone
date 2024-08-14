import React from "react";
import {
  AccountTableContainer,
  AccountTableHeader,
  HeaderText,
  AccountTableBody,
  AccountTableItem,
  FlexColumn,
  BlueText,
  NormalText,
  FlexDiv,
  EditIcon,
} from "./AccountTable.styles";
import useUser from "@/hooks/useGetUser";

const AccountTable = () => {
  const user = useUser();
  return (
    <AccountTableContainer>
      <AccountTableHeader>
        <HeaderText>Vadesiz Hesaplarım</HeaderText>
      </AccountTableHeader>
      <AccountTableBody>
        <AccountTableItem>
          <FlexColumn>
            <FlexDiv>
              <EditIcon src="/assets/edit_pencil_icon.png" alt="editIcon" />
              <BlueText>TL</BlueText>
            </FlexDiv>
            <NormalText>Vadesiz TL</NormalText>
          </FlexColumn>
        </AccountTableItem>
        <AccountTableItem></AccountTableItem>
        <AccountTableItem></AccountTableItem>
      </AccountTableBody>
    </AccountTableContainer>
  );
};

export default AccountTable;
