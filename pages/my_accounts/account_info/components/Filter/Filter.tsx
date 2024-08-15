import React, { useState } from "react";
import {
  FilterContainer,
  FlexDiv,
  FilterIcon,
  ArrowIcon,
} from "./Filter.styles";
import Searchbar from "../Searchbar/Searchbar";
import Selectbox from "../Selectbox/Selectbox";
import { breakpoints } from "@/utils/constants";
import useMediaQuery from "@/hooks/useMediaQuery";

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
  const width = useMediaQuery();
  const [isAccountFilterOpen, setIsAccountFilterOpen] = useState(false);
  const [isCurrencyFilterOpen, setIsCurrencyFilterOpen] = useState(false);
  return (
    <FilterContainer>
      <Searchbar />
      {width > breakpoints.md && (
        <React.Fragment>
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
            <Selectbox
              options={currencyTypeOptions}
              placeholder="Para Birimi"
            />
            <ArrowIcon
              src="/assets/lower_arrow_dark_blue.png"
              alt="downArrow"
              active={isCurrencyFilterOpen}
            />
          </FlexDiv>
        </React.Fragment>
      )}
    </FilterContainer>
  );
};

export default Filter;
