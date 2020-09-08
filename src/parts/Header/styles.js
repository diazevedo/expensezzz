import styled, { css } from 'styled-components';

import notification from '../../assets/icons/notification.svg';

const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.header`
  width: 100%;
  ${flex};

  h1 {
    color: #fff;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export const ContainerAvatarNotification = styled.div`
  ${flex};
  flex-basis: 25rem;
`;

export const Notification = styled.button`
  background: url(${notification});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
`;
