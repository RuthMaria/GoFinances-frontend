import React, { createContext, ReactNode, useState } from 'react';

interface CreateTransactionProviderProps {
  children: ReactNode;
}

interface CreateTransactionContextData {
  activateModal: boolean;
  activeModal: () => void;
  closeModal: () => void;
}

export const CreateTransactionContext = createContext(
  {} as CreateTransactionContextData,
);

export function CreateTransactionProvider({
  children,
}: CreateTransactionProviderProps) {
  const [activateModal, setActivateModal] = useState(false);

  function activeModal() {
    setActivateModal(true);
  }

  function closeModal() {
    setActivateModal(false);
  }

  return (
    <CreateTransactionContext.Provider
      value={{
        activateModal,
        activeModal,
        closeModal,
      }}
    >
      {children}
    </CreateTransactionContext.Provider>
  );
}
