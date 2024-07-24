import { NextPage } from "next";
import React from "react";
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
} from "@/styles/styles";
import LoginForm from "./LoginForm";

const LoginMain: NextPage = () => {
  return (
    <Container padding="1.2rem">
      <FlexColumn alignItems="center" justifyContent="center">
        <Flex width="100%">
          <LoginHeader>
            Türkiye İş Bankası Bireysel İnternet Şubenize Hoş Geldiniz !
          </LoginHeader>
        </Flex>
        <LoginForm />
        <Flex width="100%">
          <Text>Şifrem Yok / Unuttum</Text>
        </Flex>
        <Flex width="100%" justifyContent="flex-end" gap="5px">
          <Button type="submit" padding="15px 40px">
            Giriş
          </Button>
          <MarginBox />
        </Flex>
        <FlexColumn>
          <FlexColumn>
            <Text>Güvenlik</Text>
            <SecurityBubble>
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
