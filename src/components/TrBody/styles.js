import styled from 'styled-components';

import { orangeGradient } from '../../styles/reusable';
import { device } from '../../styles/breakpoints';

export const Tr = styled.tr`
  background: ${(props) =>
    props.selected === true ? orangeGradient : 'transparent'};
  /* height: 7rem; */
  border-bottom: 1px #353b66 solid;

  @media ${device.laptop} {
    border: 1px solid yellow;

    & td {
      vertical-align: middle;
      text-align: center;
    }

    /* & > td:first-child {
      max-width: 1.8rem;
    } */

    /** status point  */
    & > td:last-child > span {
      margin-right: 3px;
    }
  }
`;

export const TD = styled.td`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  &:not(:first-child):before {
    content: attr(data-label);
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
  }

  @media ${device.laptop} {
    &:not(:first-child):before {
      content: '';
    }
  }
`;

export const TDProfile = styled(TD)`
  /* width: 25%; */
  display: flex;
  justify-content: space-between;

  @media ${device.laptop} {
    display: table-cell;
  }

  & > div {
    img {
      display: none;
    }

    @media ${device.laptop} {
      width: max-content;

      img {
        display: block;
      }
    }

    & > p {
      display: block;
      /* margin-left: 1em; */
      color: #fffbfc;
    }
  }
`;

export const TDAmountDate = styled(TD)`
  font-family: 'Helvetica Neue', sans-serif;
`;
