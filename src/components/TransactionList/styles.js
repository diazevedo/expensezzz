import styled from 'styled-components';
import { INCOME } from '../../utils/data/transactions';

import { flex, FlexContainerCenter } from '../../styles/reusable';

export const List = styled.ul`
  overflow: hidden;
  border-radius: 8px;
  margin-top: 1.7rem;

  > li {
    ${flex};
    padding: 1.2rem 1.2rem;
    border-bottom: 1px #353b66 solid;

    &:last-child {
      border: none;
    }
  }
`;

export const LeftContainer = styled(FlexContainerCenter)`
  & div:first-child {
    margin-right: 1.2rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: ${(props) => (props.right ? 'right' : 'inherit')};
`;

export const Transaction = styled.p`
  font-weight: 600;
  color: #f9f9fb;
`;

export const Date = styled.p`
  font-size: 1.2rem;
  font-family: 'Helvetica Neue', sans-serif;
  color: #c7c9d7;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const Amount = styled.p`
  color: ${(props) => (props.transaction === INCOME ? '#1abcb0' : '#b44266')};
`;

export const Currency = styled(Date)`
  font-weight: 600;
`;
