import styled from "styled-components"
import CardProyecto from "../CardProyecto"
import imgLogistica from "./logistica.png"
import imgEncriptador from "./encriptador.png"
import imgSistemad from "./sistemad.png"
const ProyectosStyled = styled.section`
    .contenedor-proy{
        display: flex;
        flex-direction: row;
        justify-content:center;
        flex-wrap: wrap;
        gap: 60px 60px;
    }
`


const Proyectos = () => {
    return (
        <ProyectosStyled className="contenedor-section">
            <h3 className="titulo-section">Proyectos</h3>

            <div className="contenedor-proy">
                <CardProyecto 
                    titulo="Encriptador" 
                    imagen={imgEncriptador}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" >
                </CardProyecto>

                <CardProyecto 
                    titulo="Encriptador" 
                    imagen={imgLogistica}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" >
                </CardProyecto>

                <CardProyecto 
                    titulo="Encriptador" 
                    imagen={imgSistemad}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" >
                </CardProyecto>

                <CardProyecto 
                    titulo="Encriptador" 
                    imagen={imgSistemad}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" >
                </CardProyecto>

                <CardProyecto 
                    titulo="Encriptador" 
                    imagen={imgSistemad}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" >
                </CardProyecto>

                
            </div>
        </ProyectosStyled>
    )
}

export default Proyectos 