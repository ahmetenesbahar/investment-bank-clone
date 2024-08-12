import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Children,
} from "react";

const ModalContext = createContext({
  handleOpenModal: (type: string) => {},
  modalType: "",
  isOpen: false,
  handleCloseModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const useModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type: string) => {
    setIsOpen(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalType("");
  };

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        modalType,
        isOpen,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
