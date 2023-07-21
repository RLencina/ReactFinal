import { styled } from "styled-components";
import { NavLink} from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  height: auto;
  transition: all ease 0.2s;
  width: 100%;

  @media (max-width: 967px) {
    display: ${({ toggleMenu }) => (toggleMenu ? "flex" : "none")};
    transition: all ease 0.2s;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  

  @media (max-width: 967px) {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    background-color: var(--white-menus);
    border-radius: 5px;
    box-shadow: -8px 5px 6px var(--shadows), 8px 5px 6px var(--shadows);
  }
`;

export const NavLi = styled.li`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 5px;
  height: auto;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;

  svg {
    height: auto;
    &.normal {
      transform: rotate(0);
      transition: all ease 0.15s;
    }
    &.rotateUp {
      transform: rotate(-180deg);
      transition: all ease 0.15s;
    }
  }

  @media (max-width: 967px) {
    &:hover {
      background-color: var(--grey-light);
    }
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  text-decoration: none;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;
  transition: all ease 0.25;
  position: relative;
  width: 100%;
`;

