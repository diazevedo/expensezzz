import styled, { css } from 'styled-components';

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const blueGradient =
  'linear-gradient(180deg,rgba(0, 198, 255, 1) 0%,rgba(0, 114, 255, 1) 100%)';

export const orangeGradient =
  'linear-gradient(85deg,rgba(254, 109, 173, 1) 0%, rgba(252, 159, 53, 1) 100%)';

export const FlexContainerCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
