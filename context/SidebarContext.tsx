import React, { createContext, useContext, useState, ReactNode } from "react";

const SidebarContext = createContext({
  activeTab: "",
  handleActiveTab: (tab: string) => {},
  sidebarSubActive: "",
  handleSidebarSubActive: (tab: string) => {},
});

interface SidebarProviderProps {
  children: ReactNode;
}

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [sidebarSubActive, setSidebarSubActive] = useState<string>("");
  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  const handleSidebarSubActive = (tab: string) => {
    setSidebarSubActive(tab);
  };

  return (
    <SidebarContext.Provider
      value={{
        activeTab,
        handleActiveTab,
        sidebarSubActive,
        handleSidebarSubActive,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
