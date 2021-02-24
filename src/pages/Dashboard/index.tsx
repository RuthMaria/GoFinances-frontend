import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Table from '../../components/Table';
import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

import { Container, CardContainer } from './styles';

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

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

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
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card
            title="Entradas"
            image={income}
            legend="Income"
            test="balance-income"
            income={balance.income}
          />

          <Card
            title="Saídas"
            image={outcome}
            legend="Outcome"
            test="balance-outcome"
            income={balance.outcome}
          />

          <Card
            title="Total"
            image={total}
            legend="Total"
            test="balance-total"
            income={balance.total}
            total="total"
          />
        </CardContainer>

        <Table transactions={transactions} />
      </Container>
    </>
  );
};

export default Dashboard;
