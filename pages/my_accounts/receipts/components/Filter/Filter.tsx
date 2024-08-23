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
  { value: "all", label: "Tümü" },
  { value: "branch", label: "Şube" },
  { value: "internet-branch", label: "Internet Şubesi" },
  { value: "phone-branch", label: "Telefon Şubesi" },
  { value: "other", label: "Diğer" },
  { value: "call-center", label: "Çağrı Merkezi" },
  { value: "İşCep", label: "İşcep" },
  { value: "iswap", label: "İşwap" },
  { value: "istablet", label: "İştablet" },
  { value: "automatic", label: "Otomatik" },
  { value: "atm", label: "Bankamatik" },
];

const currencyOptions = [
  { value: "all", label: "Tümü" },
  { value: "TL", label: "TL" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GR", label: "GR" },
];

const transactionTypeOptions = [
  { value: "all", label: "Tümü" },
  { value: "checks-and-promissory-notes", label: "Çek ve Senet" },
  { value: "foreign-trade", label: "Dış Ticaret" },
  { value: "other", label: "Diğer" },
  { value: "currency-transactions", label: "Döviz İşlemleri" },
  { value: "account-transactions", label: "Hesap İşlemleri" },
  { value: "card", label: "Kart" },
  { value: "safe-deposit-box", label: "Kiralık Kasa" },
  { value: "credit", label: "Kredi" },
  { value: "cash-transactions", label: "Nakit İşlemler" },
  { value: "payments", label: "Ödemeler" },
  { value: "money-transfer", label: "Para Aktarma" },
  { value: "term", label: "Vadeli" },
];

const Filter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const width = useMediaQuery();

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
                    options={currencyOptions}
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
                          options={transactionTypeOptions}
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
