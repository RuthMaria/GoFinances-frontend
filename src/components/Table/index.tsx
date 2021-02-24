import React from 'react';
import { TableContainer } from './styles';

interface Transaction {
  id: string;
  title: string;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
}

interface Request {
  transactions: Transaction[];
}

const Table: React.FC<Request> = ({ transactions }: Request) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>
              <button type="button">Nova transação</button>
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type}>{transaction.formattedValue}</td>
              <td>{transaction.category.title}</td>
              <td>{transaction.formattedDate}</td>
              <td>exluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
