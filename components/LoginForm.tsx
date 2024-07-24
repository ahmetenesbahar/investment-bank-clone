import React, { useState } from "react";
import {
  FlexColumn,
  InputLogin,
  Flex,
  Form,
  HelpBox,
  HelpImage,
  SecurityBubble,
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
        </Flex>
      </FlexColumn>
    </Form>
  );
};

export default LoginForm;
