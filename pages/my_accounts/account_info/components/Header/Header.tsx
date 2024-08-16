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
  Dropdown,
  DropdownIcon,
} from "./Header.styles";
import { colors } from "@/styles/colors";
import { breakpoints } from "@/utils/constants";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useMediaQuery();
  const { t } = useTranslation();

  const selectBoxOptions = [
    { value: "0", label: t("Demand") },
    { value: "1", label: t("Time Deposit") },
    { value: "2", label: t("Investment") },
  ];
  return (
    <HeaderContainer>
      <HeaderFlexBorderBottom>
        <HeaderText>{t("My Accounts")}</HeaderText>
      </HeaderFlexBorderBottom>
      <HeaderFlex
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        active={width > breakpoints.md ? true : false}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {width > breakpoints.md ? (
          <FlexDiv cursor="pointer">
            <FlexDiv>
              <Image
                src="/assets/create_account_icon.png"
                alt="create_account_icon"
              />
              <HeaderNormalText color={colors.secondaryBlue}>
                {t("Open New Account")}
              </HeaderNormalText>
            </FlexDiv>
            <Image
              src="/assets/lower_arrow_dark_blue.png"
              alt="downArrow"
              active={isOpen}
            />
          </FlexDiv>
        ) : (
          <Dropdown>
            <HeaderNormalText color={colors.white}>
              {t("Open New Account")}
            </HeaderNormalText>
            <DropdownIcon src="/assets/white_arrow_down.png" />
          </Dropdown>
        )}

        <SelectBoxDiv
          display={isOpen ? "flex" : "none"}
          active={width > breakpoints.md ? true : false}
        >
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
