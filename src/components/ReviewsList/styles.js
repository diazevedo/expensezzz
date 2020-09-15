import styled from 'styled-components';
import { FlexContainerCenter } from '../../styles/reusable';

export const List = styled.ul`
  border-top: 1px #353b66 solid;
  padding: 1.2rem;

  & * {
    font-family: 'Helvetica Neue', sans-serif;
    color: #ededf1;
  }

  & > li {
    padding: 1rem 0;

    & > p {
      margin-left: 6rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }
`;

export const HeaderItem = styled(FlexContainerCenter)`
  margin-bottom: 1rem;
`;

export const Details = styled.div`
  margin-left: 1rem;
  text-align: ${(props) => (props.right ? 'right' : 'inherit')};

  & > svg {
    margin-top: 0.5rem;
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.25rem;
  }
`;

export const ReplyButton = styled.button`
  margin-left: 5.5rem;
  margin-top: 1.5rem;
  cursor: pointer;

  & > img {
    margin-right: 1rem;
  }
`;
