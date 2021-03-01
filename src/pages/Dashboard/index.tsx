import React, { useContext } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Table from '../../components/Table';

import { Container, CardContainer } from './styles';
import { DashboardContext } from '../../contexts/DashboardContext';

const Dashboard: React.FC = () => {
  const { balance } = useContext(DashboardContext);

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

        <Table />
      </Container>
    </>
  );
};

export default Dashboard;
