/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import {
  FlexColumn,
  InputLogin,
  Flex,
  Form,
  HelpBox,
  HelpImage,
  HoverBubble,
  Text,
  ListItem,
} from "@/styles/styles";

import SwitchButton from "./shared/SwitchButton";

const LoginForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Form>
      <FlexColumn>
        <Flex alignItems="center" width="100%" gap="5px">
          <Flex position="relative" alignItems="center" width="inherit">
            <InputLogin
              type="number"
              placeholder="Müşteri Numaranız / TCKN / YKN"
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

        <Flex width="100%" alignItems="center" gap="5px">
          <Flex position="relative" alignItems="center" width="inherit">
            <InputLogin
              type="password"
              pattern="[0-9]*"
              inputMode="numeric"
              noHover
              placeholder="Şifre / Geçiçi Şifre"
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
    </Form>
  );
};

export default LoginForm;
