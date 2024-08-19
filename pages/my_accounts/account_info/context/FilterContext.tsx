import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  currencyFilter: string[];
  accountTypeFilter: string[];
  handleCurrencyFilter: (currency: string[]) => void;
  handleAccountTypeFilter: (accountType: string[]) => void;
}

const FilterContext = createContext<FilterContextProps>({
  currencyFilter: [],
  accountTypeFilter: [],
  handleCurrencyFilter: () => {},
  handleAccountTypeFilter: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export const useFilter = () => useContext(FilterContext);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [currencyFilter, setCurrencyFilter] = useState<string[]>([]);
  const [accountTypeFilter, setAccountTypeFilter] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const handleCurrencyFilter = (currencies: string[]) => {
    setCurrencyFilter((prevFilters) => {
      const updatedFilters = prevFilters.filter((filter) =>
        currencies.includes(filter)
      );
      const newFilters = Array.from(
        new Set([...updatedFilters, ...currencies])
      );
      console.log("Updated currencyFilter:", newFilters);
      return newFilters;
    });
  };

  const handleAccountTypeFilter = (accountTypes: string[]) => {
    setAccountTypeFilter((prevFilters) => {
      const updatedFilters = prevFilters.filter((filter) =>
        accountTypes.includes(filter)
      );
      const newFilters = Array.from(
        new Set([...updatedFilters, ...accountTypes])
      );
      console.log("Updated accountTypeFilter:", newFilters);
      return newFilters;
    });
  };

  return (
    <FilterContext.Provider
      value={{
        currencyFilter,
        accountTypeFilter,
        handleCurrencyFilter,
        handleAccountTypeFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
