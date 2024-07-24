import React, { useState } from "react";
import {
  FlexColumn,
  InputLogin,
  Flex,
  Form,
  HelpBox,
  HelpImage,
} from "@/styles/styles";

import SwitchButton from "./shared/SwitchButton";

const LoginForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Form>
      <FlexColumn>
        <Flex alignItems="center" width="100%" gap="5px">
          <InputLogin
            type="number"
            placeholder="Müşteri Numaranız / TCKN / YKN"
          />
          <SwitchButton checked={isChecked} onChange={handleOnChange} />
          <HelpBox>
            <HelpImage src="https://www.isbank.com.tr/Internet/Omni/assets/img/information_icon.png" />
          </HelpBox>
        </Flex>
        <Flex width="100%" alignItems="center" gap="5px">
          <InputLogin
            type="password"
            pattern="[0-9]*"
            inputMode="numeric"
            noHover
            placeholder="Şifre / Geçiçi Şifre"
          />
          <HelpBox>
            <HelpImage src="https://www.isbank.com.tr/Internet/Omni/assets/img/information_icon.png" />
          </HelpBox>
        </Flex>
      </FlexColumn>
    </Form>
  );
};

export default LoginForm;
