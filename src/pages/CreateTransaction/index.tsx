import React, { useContext, useState } from 'react';
import { Modal } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { CreateTransactionContext } from '../../context/CreateTransactionContext';
import api from '../../services/api';

const CreateTransaction: React.FC = () => {
  const { closeModal } = useContext(CreateTransactionContext);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [stylesIncome, setStylesIncome] = useState('disableIncome');
  const [stylesOutcome, setStylesOutcome] = useState('disableOutcome');

  const handleIncome = () => {
    setType('income');
    setStylesIncome('activeIncome');
    setStylesOutcome('disableOutcome');
  };

  const handleOutcome = () => {
    setType('outcome');
    setStylesOutcome('activeOutcome');
    setStylesIncome('disableIncome');
  };

  async function handleSaveTransaction(): Promise<void> {
    await api.post('/transactions', {
      title,
      value,
      type,
      category,
    });

    closeModal();
  }

  return (
    <Modal>
      <div>
        <h1>Cadastro</h1>
        <input
          type="text"
          placeholder="Nome"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          onChange={e => setValue(Number(e.target.value))}
        />

        <div>
          <button type="button" className={stylesIncome} onClick={handleIncome}>
            <img src={income} alt="Icon de incone" />
            Income
          </button>
          <button
            type="button"
            className={stylesOutcome}
            onClick={handleOutcome}
          >
            <img src={outcome} alt="Icon de outcome" />
            Outcome
          </button>
        </div>

        <input
          type="text"
          placeholder="Categoria"
          onChange={e => setCategory(e.target.value)}
        />
        <div>
          <button type="button" className="exit" onClick={closeModal}>
            Cancelar
          </button>
          <button
            type="button"
            className="save"
            onClick={handleSaveTransaction}
          >
            salvar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTransaction;
