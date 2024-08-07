import React, { createContext, useContext, useState, ReactNode } from "react";

const PageContext = createContext({
  page: "",
  handlePageChange: (PageValue: string) => {},
  menu: false,
  handleOpenMenu: () => {},
  hideNumbers: false,
  handleHideNumbers: () => {},
});

interface PageProviderProps {
  children: ReactNode;
}

export const usePage = () => useContext(PageContext);

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState("");
  const [menu, setMenu] = useState(false);
  const [hideNumbers, setHideNumbers] = useState(false);

  const handlePageChange = (pageValue: string) => {
    setPage(pageValue);
  };
  const handleOpenMenu = () => {
    setMenu(!menu);
  };
  const handleHideNumbers = () => {
    setHideNumbers(!hideNumbers);
  };

  return (
    <PageContext.Provider
      value={{
        page,
        handlePageChange,
        menu,
        handleOpenMenu,
        hideNumbers,
        handleHideNumbers,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
