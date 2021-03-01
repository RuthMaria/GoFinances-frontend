import React, { createContext, ReactNode, useEffect, useState } from 'react';
import formatValue from '../utils/formatValue';
import formatDate from '../utils/formatDate';
import api from '../services/api';

interface DashboardProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

interface ResponseDTO {
  transactions: Transaction[];
  balance: Balance;
}

interface DashboardContextData {
  transactions: Transaction[];
  balance: Balance;
  removeTransaction: (id: string) => void;
  createTransaction: (id: number) => void;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [removedTransaction, setRemovedTransaction] = useState('');
  const [createdTransaction, setCreatedTransaction] = useState(0);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  function removeTransaction(id: string) {
    setRemovedTransaction(id);
  }

  function createTransaction(id: number) {
    setCreatedTransaction(id);
  }

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get<ResponseDTO>('transactions');

      const transactionsAll = response.data.transactions;
      const balanceAll = response.data.balance;

      const transactionsFormatted = transactionsAll.map(transaction => {
        const formatedValue = transaction.type === 'outcome' ? ' - ' : '';

        return {
          ...transaction,
          formattedValue: formatedValue + formatValue(transaction.value),
          formattedDate: formatDate(transaction.created_at),
        };
      });

      const balanceFormatted: Balance = {
        income: formatValue(Number(balanceAll.income)),
        outcome: formatValue(Number(balanceAll.outcome)),
        total: formatValue(Number(balanceAll.total)),
      };

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);
    }
    loadTransactions();
  }, [removedTransaction, createdTransaction]);

  return (
    <DashboardContext.Provider
      value={{
        transactions,
        balance,
        removeTransaction,
        createTransaction,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
