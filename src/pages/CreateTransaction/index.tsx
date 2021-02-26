import React from 'react';
import { Modal } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

const CreateTransaction: React.FC = () => {
  return (
    <Modal>
      <div>
        <h1>Cadastro</h1>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Preço" />

        <div>
          <button type="button">
            <img src={income} alt="Icon de incone" />
            Income
          </button>
          <button type="button">
            <img src={outcome} alt="Icon de outcome" />
            Outcome
          </button>
        </div>

        <input type="text" placeholder="Categoria" />
        <div>
          <button type="button" className="exit">
            Cancelar
          </button>
          <button type="button" className="save">
            salvar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTransaction;
