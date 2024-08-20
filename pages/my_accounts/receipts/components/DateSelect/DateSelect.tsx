import React from "react";
import {
  DateSelectContainer,
  HeaderText,
  InfoIcon,
  FlexDiv,
} from "./DateSelect.styles";
import DatePicker from "../DatePicker/DatePicker";

const DateSelect: React.FC = () => {
  return (
    <DateSelectContainer>
      <FlexDiv>
        <HeaderText>Tarih Aralığı</HeaderText>
        <InfoIcon src="/assets/infoForgot_icon.png" />
      </FlexDiv>
      <FlexDiv>
        <DatePicker />
        -
        <DatePicker />
      </FlexDiv>
    </DateSelectContainer>
  );
};

export default DateSelect;
