import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  currencyFilter: string[];
  channelFilter: string[];
  transactionTypeFilter: string[];
  handleCurrencyFilter: (currency: string[]) => void;
  handleChannelFilter: (channelFilter: string[]) => void;
  handleTransactionFilter: (transactionTypeFilter: string[]) => void;
}

const FilterContext = createContext<FilterContextProps>({
  currencyFilter: [],
  channelFilter: [],
  transactionTypeFilter: [],
  handleCurrencyFilter: () => {},
  handleChannelFilter: () => {},
  handleTransactionFilter: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export const useFilter = () => useContext(FilterContext);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [currencyFilter, setCurrencyFilter] = useState<string[]>([]);
  const [channelFilter, setChannelFilter] = useState<string[]>([]);
  const [transactionTypeFilter, setTransactionTypeFilter] = useState<string[]>(
    []
  );

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

  return (
    <FilterContext.Provider
      value={{
        currencyFilter,
        channelFilter,
        transactionTypeFilter,
        handleCurrencyFilter,
        handleChannelFilter,
        handleTransactionFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
