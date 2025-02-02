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
            color: white;
            text-decoration: none;
            font-size: 18px;
        }
    }

    .hide-icon{
        display: none;
    }

    @media screen and (max-width: 600px){
        .menu-icon{
            display: block;
            cursor: pointer;
            
        }

        .nav-responsive{
            display: block;
            position: absolute;
            top: 100px;
            width: 100%;
            ul{
                flex-direction: column;
                align-items: center;
            }
        }

        .hide-element{
            display: none;
        }
    }
`

const Header = () => {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

    

    return (
        <HeaderStyles>
            <div className="logo">
                <IoCodeSlash color="rgba(94 234 212/1)" fontSize={50}/>
            </div>

            <div >
                <SlMenu className={menuHamburguesa?"hide-icon":"menu-icon"} color="rgba(94 234 212/1)" fontSize={50} onClick={ ()=> setMenuHamburguesa(!menuHamburguesa)}/>
                <IoMdClose className={menuHamburguesa?"menu-icon":"hide-icon"} color="rgba(94 234 212/1)" fontSize={50} onClick={ ()=> setMenuHamburguesa(!menuHamburguesa)}/>
            </div>
        

            <nav className={menuHamburguesa?"nav-responsive":"hide-element"}>
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