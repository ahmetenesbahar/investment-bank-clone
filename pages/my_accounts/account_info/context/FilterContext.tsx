import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  searchParameter: string;
  currencyFilter: string[];
  accountTypeFilter: string[];
  handleCurrencyFilter: (currency: string[]) => void;
  handleAccountTypeFilter: (accountType: string[]) => void;
  handleSearch: (search: string) => void;
}

const FilterContext = createContext<FilterContextProps>({
  searchParameter: "",
  currencyFilter: [],
  accountTypeFilter: [],
  handleCurrencyFilter: () => {},
  handleAccountTypeFilter: () => {},
  handleSearch: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export const useFilter = () => useContext(FilterContext);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [currencyFilter, setCurrencyFilter] = useState<string[]>([]);
  const [accountTypeFilter, setAccountTypeFilter] = useState<string[]>([]);
  const [searchParameter, setSearchParameter] = useState("");

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

  const handleSearch = (search: string) => {
    setSearchParameter(search);
    console.log("Search parameter:", search);
  };

  return (
    <FilterContext.Provider
      value={{
        currencyFilter,
        accountTypeFilter,
        handleCurrencyFilter,
        handleAccountTypeFilter,
        searchParameter,
        handleSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
