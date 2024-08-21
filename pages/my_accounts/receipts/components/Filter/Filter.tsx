import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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
  FullPageFilter,
  ExitText,
  FilterButton,
} from "./Filter.styles";
import DateSelect from "../DateSelect/DateSelect";
import AmountRange from "../AmountRange/AmountRange";
import Selectbox from "../Selectbox/Selectbox";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/utils/constants";

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
  const width = useMediaQuery();

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
        {isExpanded &&
          (width >= breakpoints.md ? (
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
          ) : (
            (() => {
              const portalRoot = document.getElementById("portal-root");
              return portalRoot
                ? ReactDOM.createPortal(
                    <FullPageFilter>
                      <ExitText
                        onClick={() => {
                          setIsExpanded(!isExpanded);
                        }}
                      >
                        Vazgeç
                      </ExitText>
                      <FlexColumn>
                        <DateSelect />
                        <AmountRange />
                        <Selectbox
                          type="channelFilter"
                          options={channelOptions}
                          placeholder="Kanal"
                        />
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

                        <FlexDiv width="100%" justifyContent="flex-end">
                          <FilterButton>Filtrele</FilterButton>
                        </FlexDiv>
                      </FlexColumn>
                    </FullPageFilter>,
                    portalRoot
                  )
                : null;
            })()
          ))}
      </FilterDiv>
    </FilterContainer>
  );
};

export default Filter;
