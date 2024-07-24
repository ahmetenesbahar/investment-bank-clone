/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import {
  LoginHeader,
  FlexColumn,
  Container,
  InputLogin,
  Flex,
  Text,
  Button,
  SecurityBubble,
  ListItem,
  Form,
  MarginBox,
  ResponsiveLoginText,
  MobileLoginLogoContainer,
  LoginIcon,
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
    <Container padding="1.2rem">
      <FlexColumn alignItems="center" justifyContent="center">
        <MobileLoginLogoContainer src="/assets/mobile_header.png" />
        <Flex width="100%">
          <LoginHeader>{headerText}</LoginHeader>
        </Flex>
        <LoginForm />
        <Flex width="100%">
          <Flex alignItems="center" gap="3px" cursor="pointer">
            <LoginIcon src="/assets/login_icon.png" />
            <Text color="#49a4e0">Şifrem Yok / Unuttum</Text>
          </Flex>
        </Flex>
        <Flex width="100%" justifyContent="flex-end" gap="5px">
          <Button type="submit" padding="15px 40px" margin="20px 0px 20px 0px">
            Giriş
          </Button>
          <MarginBox />
        </Flex>
        <FlexColumn>
          <FlexColumn>
            <Flex width="100%">
              <Flex
                alignItems="center"
                gap="5px"
                cursor="pointer"
                onClick={(e) => setHelp(!help)}
              >
                <LoginIcon src="/assets/info_icon.png" display="none" />
                <ResponsiveLoginText color="#49a4e0">
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
                <Text color="#49a4e0">Güvenlik</Text>
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
                <a href="https://www.isbank.com.tr/" target="_blank">
                  www.isbank.com.tr
                </a>
                yazarak giriş yapın.
              </ListItem>
              <ListItem>
                Detaylı bilgiye ulaşmak için
                <a
                  href="https://www.isbank.com.tr/guvenlik-ipuclari"
                  target="_blank"
                >
                  tıklayın.
                </a>
              </ListItem>
            </SecurityBubble>
          </FlexColumn>
        </FlexColumn>
      </FlexColumn>
    </Container>
  );
};

export default LoginMain;
