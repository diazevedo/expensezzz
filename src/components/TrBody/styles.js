import styled from 'styled-components';

import { orangeGradient } from '../../styles/reusable';
import { device } from '../../styles/breakpoints';

export const Tr = styled.tr`
  background: ${(props) =>
    props.selected === true ? orangeGradient : 'transparent'};

  border-bottom: 1px #353b66 solid;

  @media ${device.laptop} {
    height: 7rem;

    & > td {
      vertical-align: middle;
      text-align: center;
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
    display: table-cell;

    &:not(:first-child):before {
      content: '';
    }
  }
`;

export const TDProfile = styled(TD)`
  @media ${device.laptop} {
    display: table-cell;
    width: 25%;
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
      color: #fffbfc;
    }
  }
`;

export const TDAmountDate = styled(TD)`
  font-family: 'Helvetica Neue', sans-serif;
`;
