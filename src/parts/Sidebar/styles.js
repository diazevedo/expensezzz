import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside``;

export const MenuContainer = styled.nav`
  padding: 4rem;
`;

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
  color: #a6a9b7;

  &.active {
    filter: invert(0%) sepia(89%) saturate(100%) hue-rotate(340deg)
      brightness(0%) contrast(100%);
  }
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: 2rem;
  margin-right: 1.2em;
`;
