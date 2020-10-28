import styled from 'styled-components';

import { orangeGradient } from '../../styles/reusable';

export const Tr = styled.tr`
  background: ${(props) =>
    props.selected === true ? orangeGradient : 'transparent'};
  height: 7rem;
  border-bottom: 1px #353b66 solid;

  & td {
    vertical-align: middle;
    text-align: center;
  }

  & > td:first-child {
    max-width: 1.8rem;
  }

  & > td:last-child > span {
    margin-right: 3px;
  }
`;

export const TDProfile = styled.td`
  width: 25%;

  & > div {
    width: max-content;

    & > p {
      margin-left: 1em;
      color: #fffbfc;
    }
  }
`;

export const TDAmountDate = styled.td`
  font-family: 'Helvetica Neue', sans-serif;
`;
