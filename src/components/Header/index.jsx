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

    .logo, .icon-container{
        padding: 32px 32px;
    }

    .menu-icon{
        display: none;
    }

    
    ul{
        display: flex;
        list-style: none;
        
        li{
            padding: 10px 15px;
           
            text-align: center;
            transition: transform 0.8s ease;
            
        }
        a{
            font-weight: 400;
            color: rgba(74, 85, 104, 1);
            text-decoration: none;
            font-size: 1.25rem;
            transition: all 0.3s ease;
        }

        a:hover{
            //color: #8d8b8b;
            color: black;
            //font-size: 1.2rem;
            //transform: scale(1.1)
        }
    }

    

    @media screen and (max-width: 600px){
        .nav-responsive{
            background-color: black;
            display: block;
            position: absolute;
            top: 100px;
            width: 100%;
            height: 100%;
            
            ul{
               
                flex-direction: column;
                align-items: center;

                li{
                    width: 95%;
                    padding-top: 50px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #3b3c3d;;
                    a{
                        color: white;
                    }

                    a:hover{
                        color: #9ba0aa;
                    }
                }
                
            }
        }

        .menu-icon{
            display: block;
            cursor: pointer;
        }

        .hide-icon{
            opacity: 0;
            display: none;
            transition: opacity 0.9s ease-in-out;
            position: absolute;
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

            <div className="icon-container">
                <SlMenu className={hamburgerMenu?"menu-icon hide-icon":"menu-icon show-icon"} color="#615151" fontSize={40} onClick={ ()=> setHamburgerMenu(!hamburgerMenu)}/>
                <IoMdClose className={hamburgerMenu?"menu-icon show-icon":"menu-icon hide-icon"} color="#615151" fontSize={50} onClick={ ()=> setHamburgerMenu(!hamburgerMenu)}/>
            </div>
        

            <nav className={hamburgerMenu?"nav-responsive show":"nav-responsive hide-element"}>
                <ul>
                    <li><a href="#about">Sobre mi</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </HeaderStyles>
    )   
}

export default Header