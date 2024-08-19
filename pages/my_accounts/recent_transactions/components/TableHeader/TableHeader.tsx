import React from "react";
import {
  HeaderContainer,
  HeaderDiv,
  HeaderText,
  HeaderFlex,
} from "./TableHeader.styles";

const TableHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderFlex>
          <HeaderText>İşlem Tarihi</HeaderText>
          <HeaderText>İşlem Tutarı</HeaderText>
          <HeaderText>İşlem Açıklaması</HeaderText>
        </HeaderFlex>
        <HeaderText>Kanal</HeaderText>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default TableHeader;
