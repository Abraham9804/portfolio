import styled from "styled-components"
import imagen from "./img.png"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import cv from "/Abraham_Romero_CV_2025.pdf"


const BannerStyles = styled.section`
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 250px;
    width: 100%; 
    .contenedor-text{
        text-align: center;
        padding-bottom: 100px;
        padding-left: 32px;
        padding-right: 32px;

        .titulo-section{
            color: black;
            font-size: 2.5rem;
            font-weight: 500;
            margin-bottom: 15px;
        }

        p{
            font-size: 1.5rem;
            color: rgba(74, 85, 104, 1);    
            font-weight: 500;
            line-height: 1.2;
            margin-bottom: 10px;
        }

        a{
            padding: 15px 5px;
        }

        .estilos-iconos{
            cursor: pointer;
            transition: transform 0.25s ease-in-out;
        }

        .estilos-iconos:hover{
            transform: scale(1.2);
        }
    }

    .contenedor-imagen{
        max-width: 600px;
        min-width: 300px;
        img{
        width: 100%;
        }
    }  
`

const Banner = () => {
    return <BannerStyles>
                <div className="contenedor-text">
                    <h2 className="titulo-section">Hola, soy Abraham Romero</h2>
                    <p>Web developer</p> 
                    <a href="https://www.linkedin.com/in/abraham-romero9804" target="_blank">
                        <FaLinkedin size={45} color={"#0077B5"} className="estilos-iconos"/> 
                    </a>
                    <a href="https://github.com/Abraham9804" target="_blank">
                        <IoLogoGithub size={45} color={"black"} className="estilos-iconos"/>
                    </a>
                    <a href={cv} target="_blank">
                        <FaFilePdf size={45} color={"#df2222"} className="estilos-iconos"/>
                    </a>
                    
                </div>
                <div className="contenedor-imagen">
                    <img src={imagen} alt="img"/>
                </div> 
            </BannerStyles>
}

export default Banner