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
import SwitchButton from "@/components/SwitchButton";
import LoginInput from "./LoginInput";
import useLogin from "../hooks/useLogin";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const { control, handleSubmit, errors, isError, isSuccess, isPending } =
    useLogin();
  const { t } = useTranslation("common");
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const router = useRouter();

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
              placeholder={t("Login Customer Number Placeholder")}
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
              <Text fontWeight="600">{t("customerNumber")}</Text>
              <Text>{t("Don't know customer number?")}</Text>
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
              pattern="^[0-9]*$"
              placeholder={t("Login Password Placeholder")}
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
              <Text fontWeight="600">{t("customerPassword")}</Text>
              <Text>{t("Don't have customer password?")}</Text>
              <ListItem>{t("If you have card")}</ListItem>
              <ListItem>{t("From ATM")}</ListItem>
              <ListItem>{t("From Telephone Branch")} </ListItem>
              <ListItem>{t("From Branch")}</ListItem>
            </div>
          </HoverBubble>
        </Flex>
      </FlexColumn>
      <Flex width="100%" margin="1rem 0 0 0 ">
        <Flex
          alignItems="center"
          gap="3px"
          cursor="pointer"
          onClick={() => {
            router.push("/auth/forgot-password");
          }}
        >
          <LoginIcon src="/assets/login_icon.png" />
          <Text color="#49a4e0" cursor="pointer">
            {t("Forgot Password")}
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
          {t("login")}
        </Button>
        <MarginBox />
      </Flex>
    </Form>
  );
};

export default LoginForm;
