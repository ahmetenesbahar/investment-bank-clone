import React, { useEffect, useState } from "react";
import {
  FilterContainer,
  FilterDiv,
  FilterIcon,
  ArrowIcon,
  NormalText,
  FlexFilterDiv,
  FlexBetween,
  FlexColumn,
  FlexDiv,
} from "./Filter.styles";
import DateSelect from "../DateSelect/DateSelect";
import AmountRange from "../AmountRange/AmountRange";
import Selectbox from "../Selectbox/Selectbox";

const channelOptions = [
  { value: "tümü", label: "Tümü" },
  { value: "şube", label: "Şube" },
  { value: "internet şubesi", label: "Internet Şubesi" },
  { value: "telefon şubesi", label: "Telefon Şubesi" },
  { value: "diğer", label: "Diğer" },
  { value: "çağrı merkezi", label: "Çağrı Merkezi" },
  { value: "işcep", label: "İşcep" },
  { value: "işwap", label: "İşwap" },
  { value: "iştablet", label: "İştablet" },
  { value: "otomatik", label: "Otomatik" },
  { value: "bankamatik", label: "Bankamatik" },
];

const Filter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log(isExpanded);
  }, [isExpanded]);
  return (
    <FilterContainer>
      <FilterDiv active={isExpanded}>
        <FlexBetween
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <FlexFilterDiv>
            <FilterIcon src="/assets/filter_icon.png" alt="filterIcon" />
            <NormalText>Dekont Arama</NormalText>
          </FlexFilterDiv>
          <ArrowIcon
            src="/assets/lower_arrow_dark_blue.png"
            alt="ArrowIcon"
            active={isExpanded}
          />
        </FlexBetween>
        {isExpanded && (
          <FlexColumn>
            <DateSelect />
            <FlexDiv>
              <FlexColumn gap="2rem">
                <AmountRange />
                <Selectbox
                  type="channelFilter"
                  options={channelOptions}
                  placeholder="Kanal"
                />
              </FlexColumn>
              <FlexColumn gap="2rem">
                <Selectbox
                  type="currency"
                  options={channelOptions}
                  placeholder="Para Birimi"
                />
                <Selectbox
                  type="transactionTypeFilter"
                  options={channelOptions}
                  placeholder="İşlem Tipi"
                />
              </FlexColumn>
            </FlexDiv>
          </FlexColumn>
        )}
      </FilterDiv>
    </FilterContainer>
  );
};

export default Filter;
