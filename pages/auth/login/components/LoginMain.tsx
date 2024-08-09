/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import {
  LoginHeader,
  FlexColumn,
  Container,
  Link,
  Flex,
  Text,
  Button,
  SecurityBubble,
  ListItem,
  LoginContainer,
  MarginBox,
  ResponsiveLoginText,
  MobileLoginLogoContainer,
  LoginIcon,
  Footer,
} from "@/styles/styles";
import LoginForm from "./LoginForm";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation, Trans } from "next-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ReactMarkdown from "react-markdown";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

const LoginMain: NextPage = () => {
  const { t } = useTranslation("common");
  const [help, setHelp] = useState(false);
  const windowWidth = useMediaQuery();

  useEffect(() => {
    if (windowWidth > breakpoints.lg) {
      setHelp(false);
    }
  }, [windowWidth]);

  return (
    <Container
      padding="1.2rem"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <LoginContainer
        alignItems="center"
        justifyContent="center"
        width="31.25rem"
        padding="0 1.25rem 0 0 "
      >
        <MobileLoginLogoContainer src="/assets/mobile_header.png" />
        <Flex width="100%">
          <LoginHeader>
            {windowWidth < breakpoints.lg
              ? t("mobileLoginWelcome")
              : t("loginWelcome")}
          </LoginHeader>
        </Flex>
        <LoginForm />

        <FlexColumn width="100%">
          <FlexColumn>
            <Flex width="100%">
              <Flex
                alignItems="center"
                gap="0.313rem"
                cursor="pointer"
                onClick={(e) => setHelp(!help)}
              >
                <LoginIcon
                  src="/assets/info_icon.png"
                  display="none"
                  alt="info_icon"
                />
                <ResponsiveLoginText
                  color={colors.specialBlue}
                  cursor="pointer"
                >
                  {t("help")}/{t("information")}
                </ResponsiveLoginText>
              </Flex>
            </Flex>
            <SecurityBubble display={help ? "block" : "none"}>
              <FlexColumn>
                <div>
                  <Text fontWeight="600">{t("customerNumber")}</Text>
                  <Text>{t("Don't know customer number?")}</Text>
                </div>
                <div>
                  <Text fontWeight="600">{t("customerPassword")}</Text>
                  <Text>{t("Don't have customer password?")}</Text>
                  <ListItem>{t("If you have card")}</ListItem>
                  <ListItem>{t("From ATM")}</ListItem>
                  <ListItem>{t("From Telephone Branch")}</ListItem>
                  <ListItem>{t("From Branch")}</ListItem>
                </div>
              </FlexColumn>
            </SecurityBubble>

            <Flex width="100%">
              <Flex alignItems="center" gap="0.188rem" cursor="pointer">
                <LoginIcon src="/assets/lock_icon.png" alt="lock_icon" />
                <Text color={colors.specialBlue} cursor="pointer">
                  {t("security")}
                </Text>
              </Flex>
            </Flex>

            <SecurityBubble display="block">
              <ListItem>{t("Do not share personal information")}</ListItem>
              <ListItem>{t("Do not check remember password")}</ListItem>
              <ListItem>{t("Use licensed antivirus software")}</ListItem>
              <ListItem>
                <ReactMarkdown>{t("Correct url")}</ReactMarkdown>
              </ListItem>
              <ListItem>
                <ReactMarkdown>{t("infoLink")}</ReactMarkdown>
              </ListItem>
            </SecurityBubble>
          </FlexColumn>
        </FlexColumn>
      </LoginContainer>
      <Footer>
        <Flex
          width="100%"
          borderTop={`0.063rem solid ${colors.secondaryBorderColor}`}
          justifyContent="space-between"
          height="3.125rem"
        >
          <Flex
            justifyContent="space-between"
            gap="0.625rem"
            alignItems="center"
            height="100%"
          >
            <Text color={colors.darkGray}>©2024 Türkiye İş Bankası A.Ş</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            gap="0.625rem"
            alignItems="center"
            height="100%"
          >
            <Text color={colors.specialBlue} cursor="pointer">
              {t("Contact us")}
            </Text>
            <LanguageSwitcher />
          </Flex>
        </Flex>
      </Footer>
    </Container>
  );
};

export default LoginMain;
