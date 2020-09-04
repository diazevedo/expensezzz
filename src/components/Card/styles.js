import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.8rem;
  padding-right: 2.2rem;
  border-radius: 10px;
  background: linear-gradient(
    115deg,
    rgba(254, 109, 173, 1) 0%,
    rgba(252, 159, 53, 1) 100%
  );
  color: #fff;

  box-shadow: 0px 30px 20px -15px rgba(252, 159, 53, 0.6);

  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Mulish', sans-serif;
  text-transform: capitalize;
  margin-bottom: 0.4em;
`;

export const Amount = styled.p`
  font-size: 3.5rem;
  font-weight: 600;

  &:first-letter {
    font-size: 1.9rem;
  }
`;
