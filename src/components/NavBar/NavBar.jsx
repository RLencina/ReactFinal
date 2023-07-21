import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaUserCheck,
} from "react-icons/fa";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import ModalUser from "./ModalUser/ModalUser";
import {
  NavLi,
  NavUl,
  Navbar,
  StyledNavLink,
} from "./NavBarStyles";


const NavBar = ({ toggleMenu, setToggleMenu, toggleSearchMenu }) => {
 
  const { currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggleSection, setToggleSection] = useState(false);
  const navigate = useNavigate();
 

  const handleMenuClick = () => {
    if (currentUser) {
      if (toggleSection) {
        setToggleSection(!toggleSection);
      }
      dispatch(toggleHiddenMenu());
    } else {
      navigate("/register");
    }
  };

  

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Navbar toggleMenu={toggleMenu} toggleSearchMenu={toggleSearchMenu}>
      <NavUl>
        <NavLi onClick={handleMenu}>
          <StyledNavLink to="/">Inicio</StyledNavLink>
        </NavLi>

         <NavLi onClick={handleMenu}>
          <StyledNavLink to="/#about">Nosotros</StyledNavLink>
        </NavLi>
        <NavLi onClick={handleMenu}>
          <StyledNavLink to="/#categories">Secciones</StyledNavLink>
        </NavLi>

        <NavLi onClick={handleMenu}>
          <StyledNavLink to="/#products">Productos</StyledNavLink>
        </NavLi>


        <NavLi onClick={handleMenu}>
          <StyledNavLink to="/#contact">Contacto</StyledNavLink>
        </NavLi>

        <NavLi onClick={handleMenuClick}>
          <ModalUser toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

          <FaUserCheck
            size="24px"
            color={currentUser ? "#ff0080" : "var(--black)"}
          />
          {currentUser ? (
            <p style={{ color: "#ff0080" }}>
              {currentUser.name.toUpperCase().charAt(0) +
                currentUser.lastname.toUpperCase().charAt(0)}
            </p>
          ) : (
            "Ingresar/ Registrarse"
          )}
        </NavLi>
      </NavUl>
    </Navbar>
  );
};

export default NavBar;
