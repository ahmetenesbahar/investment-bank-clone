import React, { useState } from "react";
import {
  FilterContainer,
  FlexDiv,
  FilterIcon,
  ArrowIcon,
} from "./Filter.styles";
import Searchbar from "../Searchbar/Searchbar";
import Selectbox from "../Selectbox/Selectbox";

const accountTypeOptions = [
  { label: "Vadesiz", value: "vadesiz" },
  { label: "Vadeli", value: "vadeli" },
  { label: "Yatırım", value: "yatirim" },
];

const currencyTypeOptions = [
  { label: "GR", value: "gr" },
  { label: "TL", value: "tl" },
  { label: "USD", value: "usd" },
];

const Filter: React.FC = () => {
  const [isAccountFilterOpen, setIsAccountFilterOpen] = useState(false);
  const [isCurrencyFilterOpen, setIsCurrencyFilterOpen] = useState(false);
  return (
    <FilterContainer>
      <Searchbar />
      <FlexDiv
        onClick={() => {
          setIsAccountFilterOpen(!isAccountFilterOpen);
        }}
      >
        <FilterIcon src="/assets/filter_icon.png" alt="filterIcon" />
        <Selectbox options={accountTypeOptions} placeholder="Hesap Tipi" />
        <ArrowIcon
          src="/assets/lower_arrow_dark_blue.png"
          alt="downArrow"
          active={isAccountFilterOpen}
        />
      </FlexDiv>
      <FlexDiv
        onClick={() => {
          setIsCurrencyFilterOpen(!isCurrencyFilterOpen);
        }}
      >
        <FilterIcon src="/assets/filter_icon.png" alt="filterIcon" />
        <Selectbox options={currencyTypeOptions} placeholder="Para Birimi" />
        <ArrowIcon
          src="/assets/lower_arrow_dark_blue.png"
          alt="downArrow"
          active={isCurrencyFilterOpen}
        />
      </FlexDiv>
    </FilterContainer>
  );
};

export default Filter;
