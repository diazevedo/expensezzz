import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Wrapper = styled.div`
  height: 100%;
  width: 100vw;

  main {
    @media ${device.desktop} {
      margin-left: 28.5rem;
    }
  }
`;
