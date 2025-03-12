import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Navbar>
      <Logo>MiLogo</Logo>
      <MenuIcon onClick={toggleMenu} isOpen={isOpen}>
        <IconWrapper isOpen={isOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconWrapper>
      </MenuIcon>
      <NavMenu isOpen={isOpen}>
        <NavItem href="#">Inicio</NavItem>
        <NavItem href="#">Servicios</NavItem>
        <NavItem href="#">Contacto</NavItem>
      </NavMenu>
    </Navbar>
  );
};

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
    from{
        opacity: 1;
        transform: translateY(0)
    }
    to{
        opacity: 0;
        transform: translateY(-10)
    }
`

const rotateIcon = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e272e;
  color: #fff;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const IconWrapper = styled.div`
  animation: ${rotateIcon} 0.3s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #1e272e;
    text-align: center;
    animation: ${slideDown} 0.3s ease-in-out;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  padding: 1rem;
  display: block;

  &:hover {
    color: #4bcffa;
  }
`;

export default Nav;
