// src/components/LoginInput.tsx
import React from "react";
import { useController } from "react-hook-form";
import { InputLogin } from "@/styles/styles";

interface LoginInputProps {
  name: string;
  control: any;
  placeholder: string;
  type?: string;
  pattern?: string;
  inputMode?: string;
  noHover?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({
  name,
  control,
  placeholder,
  type = "text",
  pattern,
  noHover,
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
    <div>
      <InputLogin
        {...field}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        aria-invalid={!!error}
        noHover={noHover}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default LoginInput;
