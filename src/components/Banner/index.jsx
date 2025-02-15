import styled from "styled-components"
import imagen from "./img.png"
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";

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
            color: #615151;
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
        min-width: 350px;
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
                    <a href="https://www.linkedin.com/in/abraham-romero9804/" title="Ver perfil de Linkedin" target="_blank"><FaLinkedin color={"#0A66C2"} fontSize={40}/></a>
                    <a href="/Romero_Abraham_CV_2025.pdf" title="Ver CV" target="_blank"><GrDocumentPdf  color={"#D32F2F"} fontSize={40}/></a>
                </div>
                <div className="contenedor-imagen">
                    <img src={imagen} alt="img"/>
                </div> 
            </BannerStyles>
}

export default Banner