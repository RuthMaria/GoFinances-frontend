import styled from 'styled-components';

export const Modal = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  opacity: 1;
  visibility: visible;
  z-index: 10000000000;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: #f0f2f5;
    min-width: 450px;
    min-height: 450px;

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 22px;
      line-height: 30px;
      font-weight: normal;
      text-align: left;
      margin: 50px 0 40px 0;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    input {
      height: 50px;
      width: 350px;
      border-radius: 5px;
      border: 0;
      margin-bottom: 30px;

      &::placeholder {
        color: #969cb2;
        font-size: 14px;
        line-height: 21px;
        padding-left: 20px;
      }
    }

    div {
      min-width: 350px;
      min-height: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
      margin-bottom: 30px;

      button {
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: 1px solid #969cb2;

        img {
          margin-right: 18px;
        }
      }

      .activeIncome {
        background-color: #dcfaea;
        border: 1px solid #12a454;
      }

      .disableIncome:hover {
        border: 1px solid #12a454;
      }

      .activeOutcome {
        background-color: #fae3e3;
        border: 1px solid #c53030;
      }

      .disableOutcome:hover {
        border: 1px solid #c53030;
      }
    }

    div {
      min-width: 350px;

      button.save {
        height: 50px;
        background-color: #ff872c;
        color: white;
        border: 0;
        border-radius: 5px;
        margin-bottom: 50px;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }

      button.exit {
        height: 50px;
        background-color: #c53030;
        color: white;
        border: 0;
        border-radius: 5px;
        margin-bottom: 50px;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
