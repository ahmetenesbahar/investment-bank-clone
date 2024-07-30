import React from "react";
import { FlexColumn, SecondaryHeader } from "@/styles/styles";

const Header: React.FC = () => {
  return (
    <FlexColumn width="100%">
      <SecondaryHeader
        fontWeight="600"
        borderBottom="1px solid #e5e5e5"
        padding="0 0 20px 0"
      >
        Anında Şifre
      </SecondaryHeader>
    </FlexColumn>
  );
};

export default Header;
