import styled from 'styled-components';

export const ListTitle = styled.p`
  text-align: ${(props) => (props.left ? 'left' : 'right')};
  display: inline-block;
  padding: 3.5rem 1.2rem;
  width: 50%;
  font-family: 'Helvetica Neue', sans-serif;
  color: ${(props) => (props.left ? '#ffffff' : '#5c659d')};
  font-size: 1.3rem;
`;
