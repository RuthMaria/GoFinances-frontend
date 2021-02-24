import styled from 'styled-components';

interface CardProps {
  total?: string;
}

export const CardContainer = styled.div`
  background: ${({ total }: CardProps): string =>
    total === 'total' ? '#FF872C' : '#fff'};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string =>
    total === 'total' ? '#fff' : '#363F5F'};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;
