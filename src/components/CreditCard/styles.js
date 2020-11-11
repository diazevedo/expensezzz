import styled from 'styled-components';

import lines from '../../assets/images/card-background.svg';

export const Container = styled.div`
  width: 35.6rem;
  /* height: 21.5rem; */
  height: 16.5rem;

  border-radius: 8px;

  z-index: 2;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    144deg,
    rgba(135, 47, 249, 1) 39%,
    rgba(226, 51, 255, 1) 78%
  );

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${lines});
    opacity: 0.5;
  }
`;

export const CardLogo = styled.img`
  position: absolute;
  margin-top: 2.2rem;
  margin-left: 1.2rem;

  width: 4rem;
  height: 2rem;
`;

export const Details = styled.div`
  position: absolute;
  bottom: 2.2rem;
  width: 100%;
  padding: 0 1.2rem;
  z-index: 9999;

  & * {
    font-family: 'Helvetica Neue', sans-serif;
  }
`;

export const Numbers = styled.p`
  /* font-size: 2.1rem; */
  font-size: 1.6rem;
  color: #fff;
  word-spacing: 1rem;
  font-weight: 400;

  span {
    font-size: 1.2rem;
  }
`;

export const TextWrapper = styled.div`
  float: left;
  width: 50%;
  /* margin-top: 3rem; */
  margin-top: 1rem;
`;

export const Text = styled.p`
  text-align: ${(props) => props.align};
  color: #fff;
  /* font-size: 1.5rem; */
  font-size: 1.2rem;

  &:first-child {
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    /* font-size: 1.1rem; */
    font-size: 0.9rem;
    opacity: 0.6;
  }
`;
