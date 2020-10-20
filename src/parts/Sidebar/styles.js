import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  padding: 4rem 3rem;
  border-right: solid #e8e8e8 1px;
  background: linear-gradient(
    142deg,
    rgba(39, 44, 86, 1) 0%,
    rgba(51, 58, 109, 1) 100%
  );
  z-index: 1000;
`;

export const MenuContainer = styled.nav``;

export const MenuList = styled.ul`
  font-size: 1.4rem;
  color: #a6a9b7;
`;

export const ListItem = styled.li`
  padding: 1.2em 0;
  text-transform: capitalize;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: inherit;

  &.active {
    filter: invert(0%) sepia(92%) saturate(0%) hue-rotate(19deg)
      brightness(105%) contrast(1000%);
  }
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: 2rem;
  margin-right: 1.2em;
`;

export const DownloadSection = styled.div`
  margin-top: 16rem;

  h4 {
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 600;
  }

  p {
    margin-top: 1.5rem;
    color: #a6a9b7;
  }
`;

export const DarkMode = styled.div`
  width: 21.5rem;
  margin-top: 5rem;
`;

export const Footer = styled.footer`
  width: 21.5rem;
  color: #9db1bc;
  text-align: center;
  /* position: absolute; */
  margin-top: 5rem;
  font-weight: 300;
  /* bottom: 2.5rem; */
`;
