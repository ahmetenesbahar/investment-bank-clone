import React from "react";
import {
  Input,
  AmountRangeContainer,
  HeaderText,
  FlexDiv,
} from "./AmountRange.style";

const AmountRange: React.FC = () => {
  return (
    <AmountRangeContainer flexDirection="column">
      <HeaderText>Tutar Aralığı</HeaderText>
      <FlexDiv>
        <Input />
        -
        <Input />
      </FlexDiv>
    </AmountRangeContainer>
  );
};

export default AmountRange;
