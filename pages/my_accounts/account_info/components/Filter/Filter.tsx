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
import { useTranslation } from "next-i18next";

const Filter: React.FC = () => {
  const width = useMediaQuery();
  const [isAccountFilterOpen, setIsAccountFilterOpen] = useState(false);
  const [isCurrencyFilterOpen, setIsCurrencyFilterOpen] = useState(false);
  const { t } = useTranslation();

  const accountTypeOptions = [
    { label: t("Demand"), value: "vadesiz" },
    { label: t("Time Deposit"), value: "vadeli" },
    { label: t("Investment"), value: "yatirim" },
  ];

  const currencyTypeOptions = [
    { label: "GR", value: "gr" },
    { label: "TL", value: "tl" },
    { label: "USD", value: "usd" },
  ];

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
            <Selectbox
              options={accountTypeOptions}
              placeholder={t("Account Type")}
            />
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
              placeholder={t("Currency")}
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
