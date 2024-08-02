import React, { createContext, useContext, useState, ReactNode } from "react";

const PageContext = createContext({
  page: "",
  handlePageChange: (PageValue: string) => {},
});

interface PageProviderProps {
  children: ReactNode;
}

export const usePage = () => useContext(PageContext);

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState("");

  const handlePageChange = (pageValue: string) => {
    setPage(pageValue);
  };

  return (
    <PageContext.Provider value={{ page, handlePageChange }}>
      {children}
    </PageContext.Provider>
  );
};
