import styled from 'styled-components';

export const Button = styled.button`
  /* width: 21.5rem; */
  width: 100%;
  height: 5rem;
  border-radius: 8px;
  background: linear-gradient(to right, #00c3ff, #0076ff);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 0;
  /* margin-top: 2rem; */

  cursor: pointer;

  span {
    margin-top: 6px;
    font-size: 1.4rem;
    color: #ffffff;
  }
`;
