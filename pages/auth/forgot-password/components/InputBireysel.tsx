/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  FlexColumn,
  Flex,
  Text,
  HoverBubbleWithTriangle,
} from "@/styles/styles";
import Input from "@/components/Input";
import useForgotPassword from "../hooks/useForgotPassword";

const InputBireysel: React.FC = () => {
  const { control, handleSubmit, errors, isError, isSuccess, isPending } =
    useForgotPassword();
  const [isHovered, setIsHovered] = useState("");

  return (
    <FlexColumn>
      <FlexColumn position="relative">
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
        <Input name="customerNumber" control={control} placeholder="" />
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
      <FlexColumn position="relative">
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
        <Input name="phoneNumber" control={control} placeholder="5XX1234567" />
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
            başında 00 ve + olmaksızın ülke kodu ve operatör kodu ile boşluksuz
            olarak giriniz.
          </Text>
        </HoverBubbleWithTriangle>
      </FlexColumn>
      <FlexColumn>
        <Flex gap="8px">
          <Text fontWeight="700" color="#1c345c">
            Doğrulama Kodu
          </Text>
        </Flex>
        <Input name="verification" control={control} placeholder="" />
      </FlexColumn>
    </FlexColumn>
  );
};

export default InputBireysel;
