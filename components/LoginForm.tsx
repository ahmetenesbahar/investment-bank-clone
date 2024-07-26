/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import {
  FlexColumn,
  LoginIcon,
  Flex,
  Form,
  HelpBox,
  HelpImage,
  HoverBubble,
  Text,
  ListItem,
  Button,
  MarginBox,
} from "@/styles/styles";
import SwitchButton from "./shared/SwitchButton";
import LoginInput from "./shared/LoginInput";
import useLogin from "@/hooks/useLogin";

const LoginForm: React.FC = () => {
  const { control, handleSubmit, errors, isError, isSuccess, isPending } =
    useLogin();
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FlexColumn>
        <Flex
          alignItems="center"
          width="100%"
          gap="5px"
          margin={errors.customerNumber ? "0 0 1rem 0" : "0"}
        >
          <Flex position="relative" alignItems="center" width="inherit">
            <LoginInput
              name="customerNumber"
              control={control}
              placeholder="Müşteri Numaranız / TCKN / YKN"
              type="number"
              inputMode="numeric"
              hover
            />
            <SwitchButton checked={isChecked} onChange={handleOnChange} />
          </Flex>
          <HelpBox
            onMouseEnter={() => setIsHovered("customerNumber")}
            onMouseLeave={() => setIsHovered("")}
          >
            <HelpImage src="/assets/information_icon.png" />
          </HelpBox>

          <HoverBubble
            visible={isHovered === "customerNumber" ? "visible" : "hidden"}
            top="100px"
            display={isHovered === "customerNumber" ? "block" : "none"}
          >
            <div>
              <Text fontWeight="600">Müşteri Numarası</Text>
              <Text>
                Müşteri Numaranızı bilmiyor veya hatırlamıyorsanız, Bankamatik
                kartınız üzerinde ve kredi kartı ekstrelerinde görebilirsiniz.
                Ayrıca 0850 724 0 724 numaralı Telefon Şubemizi arayarak müşteri
                temsilcisinden de öğrenebilirsiniz
              </Text>
            </div>
          </HoverBubble>
        </Flex>

        <Flex
          width="100%"
          alignItems="center"
          gap="5px"
          margin={errors.password ? "0 0 1rem 0" : "0"}
        >
          <Flex position="relative" alignItems="center" width="inherit">
            <LoginInput
              name="password"
              control={control}
              inputMode="numeric"
              type="password"
              pattern="[0-9]*"
              placeholder="Şifre / Geçiçi Şifre"
              maxLength={4}
            />
          </Flex>
          <HelpBox
            onMouseEnter={() => setIsHovered("password")}
            onMouseLeave={() => setIsHovered("")}
          >
            <HelpImage src="/assets/information_icon.png" />
          </HelpBox>

          <HoverBubble
            visible={isHovered === "password" ? "visible" : "hidden"}
            top="165px"
            display={isHovered === "password" ? "block" : "none"}
          >
            <div>
              <Text fontWeight="600">Müşteri Şifresi</Text>
              <Text>Müşteri Şifreniz yoksa veya unuttuysanız, şifrenizi</Text>
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
          </HoverBubble>
        </Flex>
      </FlexColumn>
      <Flex width="100%" margin="1rem 0 0 0 ">
        <Flex alignItems="center" gap="3px" cursor="pointer">
          <LoginIcon src="/assets/login_icon.png" />
          <Text color="#49a4e0" cursor="pointer">
            Şifrem Yok / Unuttum
          </Text>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        justifyContent="flex-end"
        gap="8px"
        alignItems="center"
      >
        <Button type="submit" padding="15px 40px" margin="20px 0px 20px 0px">
          Giriş
        </Button>
        <MarginBox />
      </Flex>
    </Form>
  );
};

export default LoginForm;
