import React, { useEffect, useState } from "react";
import {
  FilterContainer,
  FilterDiv,
  FilterIcon,
  ArrowIcon,
  NormalText,
  FlexFilterDiv,
  FlexBetween,
} from "./Filter.styles";
import DateSelect from "../DateSelect/DateSelect";

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
        {isExpanded && <DateSelect />}
      </FilterDiv>
    </FilterContainer>
  );
};

export default Filter;
