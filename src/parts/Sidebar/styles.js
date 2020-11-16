import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/breakpoints';

export const Container = styled.aside`
  height: 100vh;
  width: 100vw;

  padding: 4rem 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  overflow: hidden;

  background: linear-gradient(
    142deg,
    rgba(39, 44, 86, 1) 0%,
    rgba(51, 58, 109, 1) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;

  z-index: 1000;

  transition: visibility 0.3s linear 0.3, opacity 0.3;
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};

  @media ${device.desktop} {
    padding: 4rem 3rem;
    border-right: solid #e8e8e8 1px;
    visibility: visible;
    width: auto;
    height: 100%;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuList = styled.ul`
  font-size: 2.2rem;
  margin-top: 1.5rem;
  color: #a6a9b7;

  @media ${device.desktop} {
    font-size: 1.4rem;
  }
`;

export const ListItem = styled.li`
  padding: 0.5em 0;
  text-transform: capitalize;

  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    padding: 2.5rem 0;
    justify-content: start;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  &:hover {
    color: #fff;
  }

  &.active {
    filter: invert(0%) sepia(92%) saturate(0%) hue-rotate(19deg)
      brightness(105%) contrast(1000%);
  }
`;

export const Icon = styled.img`
  display: none;
  width: 1.8rem;
  height: 2rem;
  margin-right: 1.8em;

  @media ${device.mobileMedium} {
    display: block;
  }
`;

export const DownloadSection = styled.div`
  margin-top: 1.5rem;

  @media ${device.laptop} {
    margin-top: 7rem;
  }

  h4 {
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 600;
  }

  p {
    margin: 1rem 0;
    color: #a6a9b7;

    @media ${device.laptop} {
      margin-bottom: 2rem;
    }
  }
`;

export const DarkMode = styled.div`
  width: 21.5rem;

  @media ${device.laptop} {
    margin-top: 4rem;
  }
`;

export const Footer = styled.footer`
  width: 21.5rem;
  color: #9db1bc;
  text-align: center;
  font-weight: 300;
  margin-top: 5rem;

  /* position: absolute; */
  /* bottom: 1.5rem; */
`;
