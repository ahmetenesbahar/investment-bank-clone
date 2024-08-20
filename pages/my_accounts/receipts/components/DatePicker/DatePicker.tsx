import React, { useState, useRef, useEffect } from "react";
import Calendar from "@/components/Calendar";
import {
  FlexDiv,
  Input,
  AbsoluteFlex,
  DatePickerIcon,
} from "./DatePicker.styles";

const DatePicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <FlexDiv>
      <Input
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        ref={inputRef}
      />
      <DatePickerIcon src="/assets/date_picker_icon.png" />
      {isOpen && (
        <AbsoluteFlex ref={calendarRef}>
          <Calendar />
        </AbsoluteFlex>
      )}
    </FlexDiv>
  );
};

export default DatePicker;
