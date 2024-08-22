import React, { useEffect, useState } from "react";
import {
  Input,
  AmountRangeContainer,
  HeaderText,
  FlexDiv,
} from "./AmountRange.style";
import { useFilter } from "../../context/FilterContext";

const AmountRange: React.FC = () => {
  const { amountRange, handleAmountRange } = useFilter();
  const [minAmount, setMinAmount] = useState(amountRange[0]);
  const [maxAmount, setMaxAmount] = useState(amountRange[1]);

  useEffect(() => {
    setMinAmount(amountRange[0]);
    setMaxAmount(amountRange[1]);
  }, [amountRange]);

  const handleMinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value).toString();
    setMinAmount(value);
    handleAmountRange([value, maxAmount]);
  };

  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value).toString();
    setMaxAmount(value);
    handleAmountRange([minAmount, value]);
  };

  return (
    <AmountRangeContainer flexDirection="column">
      <HeaderText>Tutar Aralığı</HeaderText>
      <FlexDiv>
        <Input type="text" value={minAmount} onChange={handleMinAmountChange} />
        -
        <Input type="text" value={maxAmount} onChange={handleMaxAmountChange} />
      </FlexDiv>
    </AmountRangeContainer>
  );
};

export default AmountRange;
