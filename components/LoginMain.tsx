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

const LoginMain: NextPage = () => {
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
          <LoginHeader>{headerText}</LoginHeader>
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
                  Yardım / Bilgi
                </ResponsiveLoginText>
              </Flex>
            </Flex>
            <SecurityBubble display={help ? "block" : "none"}>
              <FlexColumn>
                <div>
                  <Text fontWeight="600">Müşteri Numarası</Text>
                  <Text>
                    Müşteri Numaranızı bilmiyor veya hatırlamıyorsanız,
                    Bankamatik kartınız üzerinde ve kredi kartı ekstrelerinde
                    görebilirsiniz. Ayrıca 0850 724 0 724 numaralı Telefon
                    Şubemizi arayarak müşteri temsilcisinden de öğrenebilirsiniz
                  </Text>
                </div>
                <div>
                  <Text fontWeight="600">Müşteri Şifresi</Text>
                  <Text>
                    Müşteri Şifreniz yoksa veya unuttuysanız, şifrenizi
                  </Text>
                  <ListItem>
                    Bankamatik/Kredi kartınız bulunuyorsa Anında Şifre
                    uygulamasından,
                  </ListItem>
                  <ListItem>Bankamatiklerden,</ListItem>
                  <ListItem>724 0 724 numaralı Telefon Şubesi'nden,</ListItem>
                  <ListItem>
                    Şubelerimizden ve çağrı merkezimizden Geçici Şifre alarak
                    belirleyebilirsiniz.
                  </ListItem>
                </div>
              </FlexColumn>
            </SecurityBubble>

            <Flex width="100%">
              <Flex alignItems="center" gap="3px" cursor="pointer">
                <LoginIcon src="/assets/lock_icon.png" />
                <Text color="#49a4e0" cursor="pointer">
                  Güvenlik
                </Text>
              </Flex>
            </Flex>

            <SecurityBubble display="block">
              <ListItem>
                Kişisel bilgilerinizi hiçbir şekilde kimseyle paylaşmayın,
                Bankamız çalışanı dahil hiç kimsenin yönlendirmesiyle işlem
                yapmayın.
              </ListItem>
              <ListItem>
                Kullandığınız tarayıcıda şifre saklama tercihi sunulursa kabul
                etmeyin, şifrenizi tarayıcıya kaydetmeyin.
              </ListItem>
              <ListItem>
                Mutlaka lisanslı işletim sistemi ve antivirüs yazılımı kullanın
                ve düzenli olarak güncelleyin.
              </ListItem>
              <ListItem>
                Adres çubuğuna
                <Link
                  color="#49a4e0"
                  href="https://www.isbank.com.tr/"
                  target="_blank"
                >
                  www.isbank.com.tr
                </Link>
                yazarak giriş yapın.
              </ListItem>
              <ListItem>
                Detaylı bilgiye ulaşmak için
                <Link
                  color="#49a4e0"
                  href="https://www.isbank.com.tr/guvenlik-ipuclari"
                  target="_blank"
                >
                  tıklayın.
                </Link>
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
              Bize Ulaşın
            </Text>
            <Text color="#49a4e0" cursor="pointer">
              English
            </Text>
          </Flex>
        </Flex>
      </Footer>
    </Container>
  );
};

export default LoginMain;
