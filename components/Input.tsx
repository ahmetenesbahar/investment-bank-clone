import React, { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";
import {
  InputLogin,
  ForgotPasswordInput,
  Flex,
  FlexColumn,
  Text,
} from "@/styles/styles";
import Keyboard from "@/components/Keyboard";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/utils/constants";

interface InputProps {
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
  width?: string;
  inputType?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  control,
  placeholder,
  type = "text",
  pattern,
  hover,
  keyboard,
  onClick,
  maxLength,
  width,
  inputType = "inputLogin",
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
    rules: { pattern: pattern ? new RegExp(pattern) : undefined },
  });

  const windowWidth = useMediaQuery();

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(keyboard || false);
  const inputRef = useRef<HTMLDivElement>(null);
  const patternRegex = pattern ? new RegExp(pattern) : null;

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
      }
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsKeyboardVisible(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (patternRegex && !patternRegex.test(newValue)) {
      return;
    }

    field.onChange(newValue);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const InputComponent =
    inputType === "inputLogin" ? InputLogin : ForgotPasswordInput;

  return (
    <FlexColumn width="100%" ref={inputRef}>
      <InputComponent
        {...field}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        aria-invalid={!!error}
        hover={hover}
        error={!!error}
        maxLength={maxLength}
        width={width}
        onClick={() => {
          setIsKeyboardVisible(!isKeyboardVisible);
        }}
        onChange={(e) => handleInputChange(e)}
      />
      {error && (
        <Flex width="100%">
          <Text color="red" fontSize="14px">
            {error.message}
          </Text>
        </Flex>
      )}
      {name === "password" &&
        isKeyboardVisible &&
        windowWidth > breakpoints.md && (
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

export default Input;
