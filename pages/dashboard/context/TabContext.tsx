import React, { createContext, useContext, useState, ReactNode } from "react";

const TabContext = createContext({
  tab: "hesaplarım",
  handleTabChange: (tabValue: string) => {},
});

interface TabProviderProps {
  children: ReactNode;
}

export const useTab = () => useContext(TabContext);

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [tab, setTab] = useState("hesaplarım");

  const handleTabChange = (tabValue: string) => {
    setTab(tabValue);
  };

  return (
    <TabContext.Provider value={{ tab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};
