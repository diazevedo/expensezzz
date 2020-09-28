import styled from 'styled-components';

import { flex, blueGradient } from '../../styles/reusable';

export const Label = styled.label`
  margin-top: 20px;

  ${flex};
  cursor: pointer;
  font-size: 1.4rem;
  color: #fff;
  text-transform: capitalize;
`;

export const Check = styled.input.attrs({ type: 'checkbox' })`
  width: 6rem;
  height: 3.2rem;

  opacity: 0;

  &:checked + span {
    background: #eeeff7;
  }

  &:checked + span:before {
    transform: translateX(110%) translateY(-50%);
    background: ${blueGradient};
  }
`;

export const Controller = styled.span`
  background: red;
  display: block;
  width: 6rem;
  height: 3.2rem;
  background: #3e4369;

  position: relative;
  border-radius: 15px;
  padding: 2px;

  &:before {
    content: '';
    display: block;
    width: 2.6rem;
    height: 2.6rem;
    background: #fff;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.35s ease-in;
  }
`;
