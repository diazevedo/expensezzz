import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/breakpoints';

export const Container = styled.aside`
  padding: 1rem;
  /* padding: 4rem 3rem;  */

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* float: left; */
  /* height: 100%; */
  height: 100%;
  width: 100vw;

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

  @media ${device.mobileMedium} {
    border-right: solid #e8e8e8 1px;
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
  /* font-size: 1.4rem; */
  color: #a6a9b7;
`;

export const ListItem = styled.li`
  /* padding: 1.2em 0; */
  padding: 0.75em 0;
  text-transform: capitalize;

  display: flex;
  justify-content: center;
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
  display: none;
  width: 1.8rem;
  height: 2rem;
  margin-right: 1.2em;

  @media ${device.mobileMedium} {
    display: block;
  }
`;

export const DownloadSection = styled.div`
  margin-top: 8rem;
  /* margin-top: 4rem; */

  background-color: #8787;

  @media ${device.mobileMedium} {
    margin-top: 16rem;
  }

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
