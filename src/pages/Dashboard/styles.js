import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  & section:first-child {
    max-width: 75rem;
  }

  & > section {
    max-width: 35rem;
  }
`;
