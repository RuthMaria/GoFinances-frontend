import React from 'react';
import { BsTrash } from 'react-icons/bs';
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
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type}>{transaction.formattedValue}</td>
              <td>{transaction.category.title}</td>
              <td className="exit">
                {transaction.formattedDate}
                <BsTrash size={20} className="close" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
