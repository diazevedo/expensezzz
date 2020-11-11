import styled, { css } from 'styled-components';

import { flex } from '../../styles/reusable';
import notification from '../../assets/icons/notification.svg';
import { device } from '../../styles/breakpoints';

export const Container = styled.header`
  padding: 1rem;
  width: 100%;
  ${flex};

  h1 {
    font-size: 2.2rem;
    color: #fff;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media ${device.mobileMedium} {
    h1 {
    }
  }
`;

export const MenuBurger = styled.label`
  position: relative;
  height: 5rem;
  width: 3rem;

  z-index: 1001;

  ${(props) =>
    props.isMenuOpened &&
    css`
      transform: translate(0, 7px);
      position: fixed;
    `};

  transition: all 0.35s ease-in;
`;

export const Span = styled.span`
  height: 0.25rem;
  width: 100%;
  background: ${(props) => (props.isMenuOpened ? 'transparent' : '#fff')};
  display: block;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);

  transition: all 0.25s ease-out;

  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: #fff;
    transition: all 0.35s ease-out;
  }

  &::before {
    top: ${(props) => (!props.isMenuOpened ? '-1rem' : '0')};

    ${(props) => props.isMenuOpened && `transform: rotate(-45deg)`};

    transition: all 0.35s ease-out;
  }

  &::after {
    top: ${(props) => (!props.isMenuOpened ? '1rem' : '0')};
    ${(props) => props.isMenuOpened && `transform: rotate(45deg)`};
  }
`;

export const MenuControl = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const ContainerAvatarNotification = styled.div`
  ${flex};

  @media ${device.laptop} {
    /* flex-basis: 25rem; */
  }
`;

export const Notification = styled.button`
  background: url(${notification});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;

  display: none;

  @media ${device.mobileMedium} {
    display: none;
  }
`;
