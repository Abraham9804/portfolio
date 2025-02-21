import styled from "styled-components"
import { FaGithub } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const CardProyectosStyled = styled.article`
        max-width: 400px;
        min-width: 300px;
        height: 500px;
        //min-height: 400px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    .contenedor-img-iconos{
        width: 100%;
        height: 48%;
        cursor: pointer;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            display: block;
            margin: auto auto;
            transition: opacity 0.3s ease-in-out;
        }

        span{
            background-color: #262626  ;
            padding: 5px 15px;
            border-radius: 10px;
            color: white;
            margin: 10px;
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
    }

    .contenedor-texto-badges{
        width: 100%;
        height: 52%;

        .contenedor-texto, .contenedor-badges{
            text-align: left;
            padding: 16px 21px;
        }

        .contenedor-texto {
            h3{
                font-weight: 700;
                color: rgba(74, 85, 104, 1);
                font-size: 1.25rem;
                line-height: 1.625;
            }
            
            p{
                color: rgba(74,85,104, 1);
                line-height: 1.625;
            }
        }

        .contenedor-badges{
            span{
                background-color: rgba(229, 231, 235,1);
                color: rgba(74,85,104, 1);
                padding: 4px 12px;
                border-radius: 50px;
                margin-right: 8px;
            }
        }
    }


    
`

const CardProyecto = ({titulo, imagen, urlGit, urlDeploy}) => {
    return (
        <CardProyectosStyled>
            <div className="contenedor-img-iconos">
                <img src={imagen} />
                <div className="contenedor-iconos">
                    <p>{titulo}</p>
                    <a href={urlGit}><FaGithub size={70} color="white"/></a> 
                    <a href={urlDeploy}><FaLaptopCode size={70} color="white"/></a>
                </div>
            </div>
            <div className="contenedor-texto-badges">
                <div className="contenedor-texto">
                    <h3>Titulo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, 
                        nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="contenedor-badges">
                    <span>Badge</span>
                    <span>Badge</span>
                </div>
            </div>
        </CardProyectosStyled>
    )
}

export default CardProyecto