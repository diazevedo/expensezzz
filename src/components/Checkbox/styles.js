import styled from 'styled-components';
import { flex } from '../../styles/reusable';

export const Label = styled.label`
  ${flex};
  width: 7rem;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  & input:checked + span {
    background: #fff;
  }

  & input:checked + span:after {
    display: block;
  }
`;

export const Span = styled.span`
  background: transparent;
  width: 2.3rem;
  height: 2.3rem;
  display: block;
  border: 1px solid #fff;
  position: absolute;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 1rem;
    border: solid #000;
    border-width: 0 4px 4px 0;
    transform: rotate(25deg) translate(-75%, -36%);
    display: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  opacity: 0;
  width: 0;
  height: 0;
`;
