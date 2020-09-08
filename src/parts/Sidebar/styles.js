import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  padding: 4rem 3rem;
  border-right: solid #e8e8e8 1px;
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
