import styled from 'styled-components';

export const Container = styled.div`
  & section:first-child {
    max-width: 75rem;
  }

  & > section {
    max-width: 35rem;
  }
`;
