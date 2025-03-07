import styled from "styled-components"
import imagen from "./img.png"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import cv from "/Abraham_Romero_CV_2025.pdf"
import IconContact from "../IconContact";


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
                    <IconContact color="#0077B5" Icon={FaLinkedin} url="https://www.linkedin.com/in/abraham-romero9804"/>
                    <IconContact color="black" Icon={IoLogoGithub} url="https://github.com/Abraham9804"/>
                    <IconContact color="#df2222" Icon={FaFilePdf} url={cv}/>
                </div>
                <div className="contenedor-imagen">
                    <img src={imagen} alt="img"/>
                </div> 
            </BannerStyles>
}

export default Banner