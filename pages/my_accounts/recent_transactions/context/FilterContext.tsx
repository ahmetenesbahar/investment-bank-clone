import React, { createContext, ReactNode, useContext, useState } from "react";

interface FilterContextProps {
  filterData: string;
  handleFilterData: (data: string) => void;
}

const FilterContext = createContext<FilterContextProps>({
  filterData: "all",
  handleFilterData: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export const useFilter = () => useContext(FilterContext);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterData, setFilterData] = useState<string>("all");

  const handleFilterData = (data: string) => {
    setFilterData(data);
  };

  return (
    <FilterContext.Provider
      value={{
        filterData,
        handleFilterData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
