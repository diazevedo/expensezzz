import styled from 'styled-components';
import { orangeGradient, flex } from '../../styles/reusable';

export const Icon = styled.div`
  ${flex};
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${orangeGradient};
`;
