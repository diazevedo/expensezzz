import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Table = styled.table`
  margin-top: 1.5rem;
  width: 100%;

  & > * {
    color: #fffbfc;
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    & label {
      /** to control left margin of the checkbox */
      margin-left: 2rem;
    }
  }
`;

export const Header = styled.thead`
  display: none;

  @media ${device.laptop} {
    & tr th:first-child {
      text-indent: 6rem;
      text-align: left;
    }

    th {
      text-transform: capitalize;
      height: 5rem;
      vertical-align: middle;
      font-size: 1.4rem;
    }
  }

  @media ${device.laptop} {
    display: revert;
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
