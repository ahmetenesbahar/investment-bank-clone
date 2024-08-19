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
  handleOpenEditModal: (type: string, id: string) => {},
  isEdit: false,
  modalId: "",
});

interface ModalProviderProps {
  children: ReactNode;
}

export const useModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalId, setModalId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleOpenModal = (type: string) => {
    setIsOpen(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsEdit(false);
    setModalType("");
  };

  const handleOpenEditModal = (type: string, id: string) => {
    setIsOpen(true);
    setModalType(type);
    setModalId(id);
    setIsEdit(true);
  };

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        modalType,
        isOpen,
        handleCloseModal,
        handleOpenEditModal,
        isEdit,
        modalId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
