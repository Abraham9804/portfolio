import styled from "styled-components"
import { FaGithub } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const CardProyectosStyled = styled.article`
    width: 450px;
    height: 300px;
    background-color: black;
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 300px;
        display: block;
        transition: opacity 0.3s ease-in-out;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
    }

    &:hover::after {
        opacity: 1;
    }

    &:hover .contenedor-iconos {
        opacity: 1;
        transform: translateY(0);
    }

    .contenedor-iconos{
        opacity: 0;
        z-index: 1000;
        position: relative;
        top: -200px;
        transform: translate(-0%, -50%) translateY(20px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        a{
            color: black;
            padding: 15px;
        }
        p{
            font-size: 2rem;
            padding-bottom: 10px;
            font-weight: 500;
            color: white;
        }
    }
`

const CardProyecto = ({titulo, imagen, urlGit, urlDeploy}) => {
    return (
        <CardProyectosStyled>
            <img src={imagen} />
            <div className="contenedor-iconos">
                <p>{titulo}</p>
                <a href={urlGit}><FaGithub size={70} color="white"/></a> 
                <a href={urlDeploy}><FaLaptopCode size={70} color="white"/></a>
            </div>
        </CardProyectosStyled>
    )
}

export default CardProyecto