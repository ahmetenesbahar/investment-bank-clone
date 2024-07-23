import React from "react";
import { FlexColumn, InputLogin, Flex, Form } from "@/styles/styles";

import SwitchButton from "./shared/SwitchButton";

const LoginForm: React.FC = () => {
  return (
    <Form>
      <FlexColumn>
        <Flex width="100%" alignItems="center">
          <InputLogin
            type="number"
            placeholder="Müşteri Numaranız / TCKN / YKN"
          />
          <SwitchButton checked />
        </Flex>
        <Flex width="100%">
          <InputLogin
            type="password"
            pattern="[0-9]*"
            disabled
            inputMode="numeric"
            placeholder="Şifre / Geçiçi Şifre"
          />
        </Flex>
      </FlexColumn>
    </Form>
  );
};

export default LoginForm;
