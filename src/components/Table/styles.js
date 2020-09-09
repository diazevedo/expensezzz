import styled from 'styled-components';

import { flex } from '../../styles/reusable';

export const Section = styled.section`
  padding-top: 2rem;
  border: 1px solid #353b66;
  border-radius: 8px;
  margin-top: 2rem;

  header {
    padding: 0 2rem;
    ${flex};

    h2 {
      font-family: 'Mulish', sans-serif;
      font-size: 2.4rem;
      color: #f6f6f8;
      font-weight: 700;
    }

    button {
      cursor: pointer;
    }
  }
`;

export const Table = styled.table`
  margin-top: 1.5rem;
  width: 100%;
  font-size: 1.4rem;

  & > * {
    color: #fffbfc;
  }

  & tr {
    border-bottom: 1px #353b66 solid;
  }

  & tr:last-child {
    border: none;
  }

  th {
    text-transform: capitalize;
    height: 5rem;
    vertical-align: middle;
  }

  tbody > tr {
    height: 7.5rem;
  }

  tbody > tr > td {
    vertical-align: middle;
    text-align: center;
  }
`;

export const TDProfile = styled.td`
  & > div {
    width: initial;
    justify-content: center;

    & > p {
      margin-left: 1em;
      color: #fffbfc;
    }
  }
`;
