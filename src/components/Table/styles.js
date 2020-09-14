import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 1.5rem;
  width: 100%;

  & > * {
    color: #fffbfc;
  }

  & label {
    margin-left: 2rem;
  }

  & tr th:first-child {
    text-indent: 6rem;
    text-align: left;
  }

  th {
    text-transform: capitalize;
    height: 5rem;
    vertical-align: middle;
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
