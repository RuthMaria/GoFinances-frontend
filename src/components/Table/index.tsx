import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TableContainer } from './styles';
import api from '../../services/api';
import { DashboardContext } from '../../contexts/DashboardContext';

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

const Table: React.FC = () => {
  const { transactions, removeTransaction } = useContext(DashboardContext);

  async function handleRemoveTransaction(id: string): Promise<void> {
    await api.delete(`transactions/${id}`);
    removeTransaction(id);
  }

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

                <BsTrash
                  size={20}
                  className="close"
                  onClick={() => handleRemoveTransaction(transaction.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
