/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  FlexColumn,
  Flex,
  Text,
  HoverBubbleWithTriangle,
  Button,
  Form,
} from "@/styles/styles";
import Input from "@/components/Input";
import useForgotPassword from "../hooks/useForgotPassword";

const InputBireysel: React.FC = () => {
  const { control, handleSubmit, errors, isError, isSuccess, isPending } =
    useForgotPassword("general");
  const [isHovered, setIsHovered] = useState("");

  return (
    <Form width="100%" onSubmit={handleSubmit}>
      <FlexColumn width="100%">
        <FlexColumn position="relative" width="100%">
          <Flex gap="8px">
            <Text fontWeight="700" color="#1c345c">
              Müşteri Numaranız / TCKN / YKN
            </Text>
            <img
              src="/assets/infoForgot_icon.png"
              alt=""
              onMouseEnter={() => setIsHovered("customerNumber")}
              onMouseLeave={() => setIsHovered("")}
            />
          </Flex>
          <Input
            name="customerNumber"
            control={control}
            placeholder=""
            pattern="^[0-9]*$"
            inputType="forgotPassword"
          />
          <HoverBubbleWithTriangle
            display={isHovered === "customerNumber" ? "block" : "none"}
            left="50%"
            top="50%"
            backgroundColor="#1c345c"
            width="300px"
            padding="18px 21px 21px 21px"
            triangleLeft="45px"
          >
            <Text color="#fff">
              Müşteri Numaranız, T.C. Kimlik Numaranız veya Yabancı Kimlik
              Numaranız ile giriş yapabilirsiniz. Müşteri Numaranızı Bankamatik
              kartınız üzerinde ve kredi kartı ekstrelerinizde görebilirsiniz.
              Ayrıca 0850 724 0 724 numaralı Telefon Şubemizi arayarak müşteri
              temsilcisinden öğrenebilirsiniz
            </Text>
          </HoverBubbleWithTriangle>
        </FlexColumn>
        <FlexColumn position="relative" width="100%">
          <Flex gap="8px">
            <Text fontWeight="700" color="#1c345c">
              Cep Telefonu Numaranız
            </Text>
            <img
              src="/assets/infoForgot_icon.png"
              alt=""
              onMouseEnter={() => setIsHovered("phoneNumber")}
              onMouseLeave={() => setIsHovered("")}
            />
          </Flex>
          <Input
            name="phoneNumber"
            control={control}
            placeholder="5XX1234567"
            pattern="^[0-9]*$"
            inputType="forgotPassword"
          />
          <HoverBubbleWithTriangle
            display={isHovered === "phoneNumber" ? "block" : "none"}
            left="35%"
            top="50%"
            backgroundColor="#1c345c"
            width="300px"
            padding="18px 21px 21px 21px"
            triangleLeft="50px"
          >
            <Text color="#fff">
              Cep telefonu numaranız; bir yurt içi mobil operatöre ait ise
              5XXXXXXXXX şeklinde, bir yurt dışı mobil operatörlere ait ise
              başında 00 ve + olmaksızın ülke kodu ve operatör kodu ile
              boşluksuz olarak giriniz.
            </Text>
          </HoverBubbleWithTriangle>
        </FlexColumn>
        <FlexColumn width="100%">
          <Text fontWeight="700" color="#1c345c">
            Doğrulama Kodu
          </Text>
          <Flex gap="8px">
            <img src="/assets/captcha.jpeg" alt="" />
            <Flex cursor="pointer">
              <img src="/assets/refresh.png" alt="" />
            </Flex>
          </Flex>
          <Input
            name="captcha"
            width={"250px"}
            control={control}
            placeholder=""
            pattern="^[0-9]*$"
            inputType="forgotPassword"
          />
        </FlexColumn>
        <Flex width="100%" justifyContent="end">
          <Button
            padding="1rem 3rem"
            fontWeight="700"
            fontSize="14px"
            type="submit"
          >
            Devam
          </Button>
        </Flex>
      </FlexColumn>
    </Form>
  );
};

export default InputBireysel;
