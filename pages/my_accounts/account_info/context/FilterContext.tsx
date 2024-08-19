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

  const handleCurrencyFilter = (currencies: string[]) => {
    setCurrencyFilter((prevFilters) => {
      const updatedFilters = Array.from(
        new Set([...prevFilters, ...currencies])
      );
      console.log("Updated currencyFilter:", updatedFilters);
      return updatedFilters;
    });
  };

  const handleAccountTypeFilter = (accountTypes: string[]) => {
    setAccountTypeFilter((prevFilters) => {
      const updatedFilters = Array.from(
        new Set([...prevFilters, ...accountTypes])
      );
      console.log("Updated accountTypeFilter:", updatedFilters);
      return updatedFilters;
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
