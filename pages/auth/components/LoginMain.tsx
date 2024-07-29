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

const LoginMain: NextPage = () => {
  const { t } = useTranslation("common");
  const [help, setHelp] = useState(false);
  const windowWidth = useMediaQuery();
  let headerText =
    " Türkiye İş Bankası Bireysel İnternet Şubenize Hoş Geldiniz !";
  if (windowWidth < 1024) {
    headerText = "İnternet Şubenize Hoş Geldiniz !";
  }

  useEffect(() => {
    if (windowWidth > 1024) {
      setHelp(false);
    }
  }, [windowWidth]);

  return (
    <Container padding="1.2rem" width="100%">
      <LoginContainer
        alignItems="center"
        justifyContent="center"
        width="500px"
        padding="0 20px 0 0 "
      >
        <MobileLoginLogoContainer src="/assets/mobile_header.png" />
        <Flex width="100%">
          <LoginHeader>
            {windowWidth < 1024 ? t("mobileLoginWelcome") : t("loginWelcome")}
          </LoginHeader>
        </Flex>
        <LoginForm />

        <FlexColumn width="100%">
          <FlexColumn>
            <Flex width="100%">
              <Flex
                alignItems="center"
                gap="5px"
                cursor="pointer"
                onClick={(e) => setHelp(!help)}
              >
                <LoginIcon src="/assets/info_icon.png" display="none" />
                <ResponsiveLoginText color="#49a4e0" cursor="pointer">
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
              <Flex alignItems="center" gap="3px" cursor="pointer">
                <LoginIcon src="/assets/lock_icon.png" />
                <Text color="#49a4e0" cursor="pointer">
                  {t("security")}
                </Text>
              </Flex>
            </Flex>

            <SecurityBubble display="block">
              <ListItem>{t("Do not share personal information")}</ListItem>
              <ListItem>{t("Do not check remember password")}</ListItem>
              <ListItem>{t("Use licensed antivirus software")}</ListItem>
              <ListItem>
                <Trans
                  i18nKey="Correct url"
                  components={{
                    1: (
                      <Link
                        color="#49a4e0"
                        href="https://www.isbank.com.tr/"
                        target="_blank"
                      ></Link>
                    ),
                  }}
                />
              </ListItem>
              <ListItem>
                <Trans
                  i18nKey="infoLink"
                  components={{
                    1: (
                      <Link
                        color="#49a4e0"
                        href="https://www.isbank.com.tr/guvenlik-ipuclari"
                        target="_blank"
                      ></Link>
                    ),
                  }}
                />
              </ListItem>
            </SecurityBubble>
          </FlexColumn>
        </FlexColumn>
      </LoginContainer>
      <Footer>
        <Flex
          width="100%"
          borderTop="1px solid #d3d3d3"
          justifyContent="space-between"
          height="50px"
        >
          <Flex
            justifyContent="space-between"
            gap="10px"
            alignItems="center"
            height="100%"
          >
            <Text color="#afb0b1">©2024 Türkiye İş Bankası A.Ş</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            gap="10px"
            alignItems="center"
            height="100%"
          >
            <Text color="#49a4e0" cursor="pointer">
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
