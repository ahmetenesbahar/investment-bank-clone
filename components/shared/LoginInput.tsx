import React from "react";
import { useController } from "react-hook-form";
import { InputLogin, Flex, FlexColumn } from "@/styles/styles";

interface LoginInputProps {
  name: string;
  control: any;
  placeholder: string;
  type?: string;
  pattern?: string;
  inputMode?: string;
  hover?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({
  name,
  control,
  placeholder,
  type = "text",
  pattern,
  hover,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { pattern: pattern ? new RegExp(pattern) : undefined }, //? burada ne oluyor şunu bir sor
  });

  return (
    <FlexColumn width="100%">
      <InputLogin
        {...field}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        aria-invalid={!!error}
        hover={hover}
        error={!!error}
      />
      {error && <span>{error.message}</span>}
    </FlexColumn>
  );
};

export default LoginInput;
