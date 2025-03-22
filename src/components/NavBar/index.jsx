import styled,{ keyframes,css } from "styled-components"
import { IoCodeSlash } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

const NavBarStyles = styled.header`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
`

const MenuIcon = styled.div`
    display: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
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
`;

const NavMenu = styled.nav`
    display: flex;
    a{
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        padding: 0px 20px;
    }

    @media screen and (max-width: 768px){
        display: ${props => props.$isOpen ? 'flex' : 'none'};
        flex-direction: column;
        background-color: black;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        text-align: center;
        ${({ $isOpen }) => $isOpen ? css`animation: ${slideDown} 0.3s ease-in-out;` : css`animation: ${slideUp} 0.3s ease-in-out;`}
        a{
            padding-bottom: 20px;
        }

        a:hover{
            color: #7f8185;   
        }
    }
`

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const closeMenu = () => setIsOpen(false);
    return (
        <NavBarStyles>
            <IoCodeSlash color="white" fontSize={50}/>
            <MenuIcon onClick={toggleMenu}>
                {isOpen? <IoMdClose color="white" fontSize={30} /> : <SlMenu color="white" fontSize={30} />}
            </MenuIcon>
            <NavMenu $isOpen={isOpen}>
                <a href="#about" onClick={closeMenu}>Sobre mi</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Proyectos</a>
                <a href="#contact" onClick={closeMenu}>Contacto</a>   
            </NavMenu>
        </NavBarStyles>
    )
}

export default NavBar