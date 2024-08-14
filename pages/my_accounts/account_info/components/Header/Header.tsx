import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderText,
  HeaderFlex,
  Image,
  HeaderNormalText,
  HeaderFlexBorderBottom,
  SelectBoxDiv,
  SelectBoxItem,
  FlexDiv,
} from "./Header.styles";
import { colors } from "@/styles/colors";

const selectBoxOptions = [
  { value: "0", label: "Vadesiz" },
  { value: "1", label: "Vadeli" },
  { value: "2", label: "Yatırım" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderContainer>
      <HeaderFlexBorderBottom>
        <HeaderText>Hesaplarım</HeaderText>
      </HeaderFlexBorderBottom>
      <HeaderFlex
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FlexDiv cursor="pointer">
          <FlexDiv>
            <Image
              src="/assets/create_account_icon.png"
              alt="create_account_icon"
            />
            <HeaderNormalText color={colors.secondaryBlue}>
              Anında Hesap Aç
            </HeaderNormalText>
          </FlexDiv>
          <Image
            src="/assets/lower_arrow_dark_blue.png"
            alt="downArrow"
            active={isOpen}
          />
        </FlexDiv>
        <SelectBoxDiv display={isOpen ? "flex" : "none"}>
          {selectBoxOptions.map((option, index) => (
            <SelectBoxItem key={index}>
              <HeaderNormalText color={colors.secondaryBlue}>
                {option.label}
              </HeaderNormalText>
            </SelectBoxItem>
          ))}
        </SelectBoxDiv>
      </HeaderFlex>
    </HeaderContainer>
  );
};

export default Header;
