import styled from "styled-components"
import ProjectCard from "../Projects"
import imgLogistica from "./logistica.png"
import imgEncriptador from "./encriptador.png"
import imgSistemad from "./sistemad.png"

const ProjectsStyled = styled.section`

    .project-container{
        display: flex;
        flex-direction: row;
        justify-content:center;
        flex-wrap: wrap;
        gap: 60px 60px;
    }
`


const Projects = () => {
    return (
        <ProjectsStyled className="contenedor-section">
            <h3 className="tittle-section">Proyectos</h3>

            <div className="project-container">
                <ProjectCard 
                    tittle="Encriptador" 
                    image={imgEncriptador}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" 
                    description="Encriptador de texto realizado en el curso de Oracle One Next Education"
                    badges={['JavaScript','HTML','CSS']}>
                </ProjectCard>

                <ProjectCard 
                    tittle="Sistema de logistica" 
                    image={imgLogistica}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" 
                    description="Modulo de logistica creado en sistema ERP, con funciones de inventario, recibo de material y salidas"
                    badges={['PHP','MySQL','JavaScript','HTML','CSS','JQuery','Bootstrap']}>
                </ProjectCard>

                <ProjectCard 
                    tittle="Encriptador" 
                    image={imgSistemad}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/"
                    description="Modulo de logistica creado en sistema ERP"
                    badges={['JavaScript','HTML','CSS']}>
                </ProjectCard>

                <ProjectCard 
                    tittle="Encriptador" 
                    image={imgSistemad}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" 
                    description="Modulo de logistica creado en sistema ERP"
                    badges={['JavaScript','HTML','CSS']}>
                </ProjectCard>

                <ProjectCard 
                    tittle="Encriptador" 
                    image={imgSistemad}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" 
                    description="Modulo de logistica creado en sistema ERP"
                    badges={['JavaScript','HTML','CSS']}>
                </ProjectCard>

                
            </div>
        </ProjectsStyled>
    )
}

export default Projects 