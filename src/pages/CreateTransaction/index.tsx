import React, { useContext, useState } from 'react';
import { Container } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import api from '../../services/api';
import Header from '../../components/Header';
import { DashboardContext } from '../../contexts/DashboardContext';

const CreateTransaction: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [stylesIncome, setStylesIncome] = useState('disableIncome');
  const [stylesOutcome, setStylesOutcome] = useState('disableOutcome');
  const { createTransaction } = useContext(DashboardContext);

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

  function reset() {
    setTitle('');
    setValue('');
    setType('');
    setCategory('');
    setStylesIncome('disableIncome');
    setStylesOutcome('disableOutcome');
  }

  async function handleSaveTransaction(): Promise<void> {
    await api.post('/transactions', {
      title,
      value: Number(value),
      type,
      category,
    });

    reset();
    createTransaction(Math.random());
  }

  return (
    <>
      <Header size="small" />

      <Container>
        <h1>Cadastro</h1>
        <input
          type="text"
          placeholder="Nome"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={value}
          onChange={e => setValue(e.target.value)}
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
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="button" className="save" onClick={handleSaveTransaction}>
          salvar
        </button>
      </Container>
    </>
  );
};

export default CreateTransaction;
