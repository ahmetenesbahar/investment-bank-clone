import React, { createContext, useContext, useState, ReactNode } from "react";
import Dayjs from "dayjs";

interface FilterContextProps {
  currencyFilter: string[];
  channelFilter: string[];
  transactionTypeFilter: string[];
  handleCurrencyFilter: (currency: string[]) => void;
  handleChannelFilter: (channelFilter: string[]) => void;
  handleTransactionFilter: (transactionTypeFilter: string[]) => void;
  amountRange: string[];
  isStartDateSelected: boolean;
  startDate: Dayjs.Dayjs;
  endDate: Dayjs.Dayjs;
  handleSelectStartDate: (date: Dayjs.Dayjs) => void;
  handleSelectEndDate: (date: Dayjs.Dayjs) => void;
  handleAmountRange: (range: string[]) => void;
}

const FilterContext = createContext<FilterContextProps>({
  currencyFilter: [],
  channelFilter: [],
  transactionTypeFilter: [],
  handleCurrencyFilter: () => {},
  handleChannelFilter: () => {},
  handleTransactionFilter: () => {},
  amountRange: ["0", "0"],
  isStartDateSelected: false,
  startDate: Dayjs(),
  endDate: Dayjs(),
  handleSelectStartDate: () => {},
  handleSelectEndDate: () => {},
  handleAmountRange: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export const useFilter = () => useContext(FilterContext);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const defaultStartDate = Dayjs().subtract(1, "month");
  const defaultEndDate = Dayjs();

  const [currencyFilter, setCurrencyFilter] = useState<string[]>([]);
  const [channelFilter, setChannelFilter] = useState<string[]>([]);
  const [transactionTypeFilter, setTransactionTypeFilter] = useState<string[]>(
    []
  );
  const [amountRange, setAmountRange] = useState<string[]>(["0", "0"]);
  const [isStartDateSelected, setIsStartDateSelected] = useState(false);
  const [startDate, setStartDate] = useState<Dayjs.Dayjs>(defaultStartDate);
  const [endDate, setEndDate] = useState<Dayjs.Dayjs>(defaultEndDate);

  const handleCurrencyFilter = (currencies: string[]) => {
    setCurrencyFilter((prevFilters) => {
      const updatedFilters = prevFilters.filter((filter) =>
        currencies.includes(filter)
      );
      const newFilters = Array.from(
        new Set([...updatedFilters, ...currencies])
      );
      return newFilters;
    });
  };

  const handleChannelFilter = (channelFilter: string[]) => {
    setChannelFilter((prevFilters) => {
      const updatedFilters = prevFilters.filter((filter) =>
        channelFilter.includes(filter)
      );
      const newFilters = Array.from(
        new Set([...updatedFilters, ...channelFilter])
      );
      return newFilters;
    });
  };

  const handleTransactionFilter = (transactionTypeFilter: string[]) => {
    setTransactionTypeFilter((prevFilters) => {
      const updatedFilters = prevFilters.filter((filter) =>
        transactionTypeFilter.includes(filter)
      );
      const newFilters = Array.from(
        new Set([...updatedFilters, ...transactionTypeFilter])
      );
      return newFilters;
    });
  };

  const handleSelectStartDate = (date: Dayjs.Dayjs) => {
    setStartDate(date);
  };
  const handleSelectEndDate = (date: Dayjs.Dayjs) => {
    setEndDate(date);
  };

  const handleAmountRange = (range: string[]) => {
    setAmountRange(range);
  };

  return (
    <FilterContext.Provider
      value={{
        currencyFilter,
        channelFilter,
        transactionTypeFilter,
        amountRange,
        isStartDateSelected,
        startDate,
        endDate,
        handleCurrencyFilter,
        handleChannelFilter,
        handleTransactionFilter,
        handleSelectStartDate,
        handleSelectEndDate,
        handleAmountRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
