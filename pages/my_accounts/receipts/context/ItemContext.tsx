import React, { createContext, useContext, useEffect, useState } from "react";
import useUser from "@/hooks/useGetUser";

interface ItemContextProps {
  checkedItems: Set<number>;
  handleCheckBoxClick: (index: number) => void;
  totalReceipts: number;
  handleRemoveAll: () => void;
}

const ItemContext = createContext<ItemContextProps>({
  checkedItems: new Set(),
  handleCheckBoxClick: () => {},
  totalReceipts: 0,
  handleRemoveAll: () => {},
});

interface ItemProviderProps {
  children: React.ReactNode;
}

export const useItem = () => useContext(ItemContext);

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const user = useUser();
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [totalReceipts, setTotalReceipts] = useState<number>(0);

  const handleCheckBoxClick = (index: number) => {
    setCheckedItems((prev) => {
      const newCheckedItems = new Set(prev);
      if (newCheckedItems.has(index)) {
        newCheckedItems.delete(index);
      } else {
        newCheckedItems.add(index);
      }
      return newCheckedItems;
    });
  };

  const handleRemoveAll = () => {
    setCheckedItems(new Set());
  };

  useEffect(() => {
    setTotalReceipts(user?.receipts.length || 0);
  }, [user]);

  return (
    <ItemContext.Provider
      value={{
        checkedItems,
        handleCheckBoxClick,
        totalReceipts,
        handleRemoveAll,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
