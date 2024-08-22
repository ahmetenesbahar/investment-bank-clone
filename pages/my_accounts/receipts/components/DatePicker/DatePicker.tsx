import React, { useState, useRef, useEffect } from "react";
import Calendar from "@/components/Calendar";
import {
  FlexDiv,
  Input,
  AbsoluteFlex,
  DatePickerIcon,
} from "./DatePicker.styles";
import { useDate } from "@/context/DateContext";
import { useFilter } from "../../context/FilterContext";

interface DatePickerProps {
  type: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectDateOthers } = useDate();
  const { handleSelectStartDate, handleSelectEndDate, startDate, endDate } =
    useFilter();

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

  useEffect(() => {
    if (type === "start" && isOpen) {
      handleSelectStartDate(selectDateOthers);
    } else if (type === "end" && isOpen) {
      handleSelectEndDate(selectDateOthers);
    }
  }, [selectDateOthers]);

  return (
    <FlexDiv>
      <Input
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        value={
          type === "start"
            ? startDate.format("DD.MM.YYYY")
            : endDate.format("DD.MM.YYYY")
        }
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
