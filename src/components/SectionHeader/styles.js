import styled from 'styled-components';
import { flex } from '../../styles/reusable';

export const Header = styled.header`
  padding: 0 1.2rem;
  ${flex};

  h2 {
    font-family: 'Mulish', sans-serif;
    /* font-size: 2.4rem; */
    font-size: 2rem;
    color: #f6f6f8;
    font-weight: 600;
    text-transform: capitalize;
  }

  button {
    cursor: pointer;
  }
`;
