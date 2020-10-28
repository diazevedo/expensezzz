import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;

  margin: 0 auto;

  p {
    font-family: 'Mulish', sans-serif;
    font-size: 1.8rem;
    color: #f6f6f8;
    font-weight: 400;
    text-transform: capitalize;
  }

  button {
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
