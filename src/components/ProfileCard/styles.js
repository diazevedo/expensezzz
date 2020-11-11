import styled from 'styled-components';

import { flex } from '../../styles/reusable';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  /* width: 20rem; */
  /* ${flex}; */

  @media ${device.laptop} {
    width: 20rem;
    ${flex};
  }
`;

export const Name = styled.p`
  font-size: 1.5rem;
  color: #a6a9b7;
  /* display: none; */
  margin-left: 1.5rem;
`;
