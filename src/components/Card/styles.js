import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  background: linear-gradient(
    115deg,
    rgba(254, 109, 173, 1) 0%,
    rgba(252, 159, 53, 1) 100%
  );

  color: #fff;
  box-shadow: 0px 30px 45px -25px rgba(252, 159, 53, 0.6);

  @media ${device.mobileMedium} {
    padding: 2.2rem;
  }

  @media ${device.laptop} {
    padding: 2.6rem;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Mulish', sans-serif;
  text-transform: capitalize;
  margin-bottom: 0.4em;

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`;

export const Amount = styled.p`
  font-size: 2.5rem;
  font-weight: 600;

  &:first-letter {
    font-size: 1.9rem;
  }

  @media ${device.laptop} {
    font-size: 3.5rem;
  }
`;
