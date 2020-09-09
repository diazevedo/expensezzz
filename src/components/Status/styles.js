import styled from 'styled-components';
import { blueGradient, orangeGradient } from '../../styles/reusable';

export const Container = styled.span`
  display: block;
  width: 10px;
  height: 10px;

  background: ${(props) => (props.state === 1 ? orangeGradient : blueGradient)};
  border-radius: 50%;
  text-indent: -9999px;
`;
