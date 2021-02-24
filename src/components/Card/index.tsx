import React from 'react';
import { CardContainer } from './styles';

interface Request {
  title: string;
  image: string;
  legend: string;
  test: string;
  income: string;
  total?: string;
}

const Dashboard: React.FC<Request> = ({
  title,
  image,
  legend,
  test,
  income,
  total,
}: Request) => {
  return (
    <>
      <CardContainer total={total}>
        <header>
          <p>{title}</p>
          <img src={image} alt={legend} />
        </header>
        <h1 data-testid={test}>{income}</h1>
      </CardContainer>
    </>
  );
};

export default Dashboard;
