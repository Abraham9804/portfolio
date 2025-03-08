import styled from "styled-components"
import { IoCodeSlash } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";


const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 32px;

    .menu-icon{
        display: none;
    }
    
    ul{
        display: flex;
        list-style: none;
        li{
            padding: 10px 15px;
        }
        a{
            font-weight: 400;
            color: black;
            text-decoration: none;
            font-size: 18px;
        }
    }

    

    @media screen and (max-width: 600px){
        .menu-icon{
            display: block;
            cursor: pointer;
        }

        .hide-icon{
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            position: absolute;
        }

        .nav-responsive{
            display: block;
            position: absolute;
            top: 100px;
            width: 80%;
            ul{
                flex-direction: column;
                align-items: center;
            }
        }

        .show{
            opacity: 1;
            transform: translateY(0);
            transition:  opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .show-icon{
            opacity: 1;
            transition:  opacity 0.3s ease-in-out;
        }

        .hide-element{
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            position: absolute;
            
        }
    }
`

const Header = () => {

    const [hamburgerMenu, setHamburgerMenu] = useState(false);


    

    return (
        <HeaderStyles>
            <div className="logo">
                <IoCodeSlash color="black" fontSize={50}/>
            </div>

            <div >
                <SlMenu className={hamburgerMenu?"menu-icon hide-icon":"menu-icon show-icon"} color="#615151" fontSize={40} onClick={ ()=> setHamburgerMenu(!hamburgerMenu)}/>
                <IoMdClose className={hamburgerMenu?"menu-icon show-icon":"menu-icon hide-icon"} color="#615151" fontSize={50} onClick={ ()=> setHamburgerMenu(!hamburgerMenu)}/>
            </div>
        

            <nav className={hamburgerMenu?"nav-responsive show":"nav-responsive hide-element"}>
                <ul>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </HeaderStyles>
    )   
}

export default Header