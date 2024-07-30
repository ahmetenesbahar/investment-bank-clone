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
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const InputBireysel: React.FC = () => {
  const { control, handleSubmit, errors, isError, isSuccess, isPending } =
    useForgotPassword("general");
  const [isHovered, setIsHovered] = useState("");
  const { t } = useTranslation();
  const router = useRouter();
  const currentLang = router.locale;

  return (
    <Form width="100%" onSubmit={handleSubmit}>
      <FlexColumn width="100%">
        <FlexColumn width="100%">
          <Flex gap="8px" position="relative">
            <Text fontWeight="700" color="#1c345c">
              {t("Customer Number / TCKN / YKN")}
            </Text>
            <img
              src="/assets/infoForgot_icon.png"
              alt=""
              onMouseEnter={() => setIsHovered("customerNumber")}
              onMouseLeave={() => setIsHovered("")}
            />
            <HoverBubbleWithTriangle
              display={isHovered === "customerNumber" ? "block" : "none"}
              left={currentLang === "en" ? "42%" : "32%"}
              top="150%"
              backgroundColor="#1c345c"
              width="300px"
              padding="18px 21px 21px 21px"
              triangleLeft="50%"
            >
              <Text color="#fff">{t("Customer Number Info")}</Text>
            </HoverBubbleWithTriangle>
          </Flex>
          <Input
            name="customerNumber"
            control={control}
            placeholder=""
            pattern="^[0-9]*$"
            inputType="forgotPassword"
          />
        </FlexColumn>
        <FlexColumn width="100%">
          <Flex gap="8px" position="relative">
            <Text fontWeight="700" color="#1c345c">
              {t("Mobile Phone Number")}
            </Text>
            <img
              src="/assets/infoForgot_icon.png"
              alt=""
              onMouseEnter={() => setIsHovered("phoneNumber")}
              onMouseLeave={() => setIsHovered("")}
            />
            <HoverBubbleWithTriangle
              display={isHovered === "phoneNumber" ? "block" : "none"}
              left={currentLang === "en" ? "17%" : "23%"}
              top="150%"
              backgroundColor="#1c345c"
              width="300px"
              padding="18px 21px 21px 21px"
              triangleLeft="50%"
            >
              <Text color="#fff">{t("Mobile Phone Number Info")}</Text>
            </HoverBubbleWithTriangle>
          </Flex>
          <Input
            name="phoneNumber"
            control={control}
            placeholder="5XX1234567"
            pattern="^[0-9]*$"
            inputType="forgotPassword"
          />
        </FlexColumn>
        <FlexColumn width="100%">
          <Text fontWeight="700" color="#1c345c">
            {t("Confirmation Code")}
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
            {t("Continue")}
          </Button>
        </Flex>
      </FlexColumn>
    </Form>
  );
};

export default InputBireysel;
