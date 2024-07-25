import React, { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";
import { InputLogin, Flex, FlexColumn } from "@/styles/styles";
import Keyboard from "./Keyboard";
import useMediaQuery from "@/hooks/useMediaQuery";
interface LoginInputProps {
  name: string;
  control: any;
  placeholder: string;
  type?: string;
  pattern?: string;
  inputMode?: string;
  hover?: boolean;
  keyboard?: boolean;
  onClick?: () => void;
  maxLength?: number;
}

const LoginInput: React.FC<LoginInputProps> = ({
  name,
  control,
  placeholder,
  type = "text",
  pattern,
  hover,
  keyboard,
  onClick,
  maxLength,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { pattern: pattern ? new RegExp(pattern) : undefined },
  });

  const windowWidth = useMediaQuery();

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(keyboard || false);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (key: string) => {
    let newValue: string;
    const currentValue = field.value || "";

    if (key === "backspace") {
      newValue = currentValue.slice(0, -1);
      field.onChange(newValue, { shouldValidate: false });
    } else {
      if (currentValue.length < 4) {
        newValue = currentValue + key;
        field.onChange(newValue);
        console.log(`Current value: ${newValue}`);
      }
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsKeyboardVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <FlexColumn width="100%" ref={inputRef}>
      <InputLogin
        {...field}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        aria-invalid={!!error}
        hover={hover}
        error={!!error}
        maxLength={maxLength}
        onClick={() => {
          setIsKeyboardVisible(!isKeyboardVisible);
        }}
        inputMode="numeric"
      />
      {error && (
        <Flex position="absolute" bottom="-24px" width="100%">
          <span style={{ color: "red" }}>{error.message}</span>
        </Flex>
      )}
      {name === "password" && isKeyboardVisible && windowWidth > 768 && (
        <Flex
          position="absolute"
          right="100px"
          bottom="-195px"
          justifyContent="center"
        >
          <Keyboard onKeyPress={handleKeyPress} />
        </Flex>
      )}
    </FlexColumn>
  );
};

export default LoginInput;
