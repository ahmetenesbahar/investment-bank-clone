import React, { createContext, useContext, useState, ReactNode } from "react";

const PageContext = createContext({
  page: "",
  handlePageChange: (PageValue: string) => {},
  menu: false,
  handleOpenMenu: () => {},
});

interface PageProviderProps {
  children: ReactNode;
}

export const usePage = () => useContext(PageContext);

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState("");
  const [menu, setMenu] = useState(false);

  const handlePageChange = (pageValue: string) => {
    setPage(pageValue);
  };
  const handleOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <PageContext.Provider
      value={{ page, handlePageChange, menu, handleOpenMenu }}
    >
      {children}
    </PageContext.Provider>
  );
};
