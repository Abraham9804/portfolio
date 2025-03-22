import styled from "styled-components"
import CardProject from "../CardProject"
import imgEncriptador from "./encriptador.png"
import imgOrg from "./org.png"
import imgAluraGeek from "./alurageek.png"
import imgaluraplay  from "./aluraplay.png"
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
        <ProjectsStyled className="section-container" id="projects">
            <h3 className="section-tittle">Proyectos</h3>

            <div className="project-container">
                <CardProject
                    tittle="Organizador de equipos" 
                    image={imgOrg}
                    urlGit="https://github.com/Abraham9804/org" 
                    urlDeploy="https://org-peach-two.vercel.app/" 
                    description="App en React para crear equipos de trabajo"
                    badges={['React','JavaScript','HTML','CSS']}>
                </CardProject>

                <CardProject 
                    tittle="AluraGeek" 
                    image={imgAluraGeek}
                    urlGit="https://github.com/Abraham9804/alurageek" 
                    urlDeploy="https://abraham9804.github.io/alurageek/" 
                    description="Proyecto final del curso Oracle One next education,
                    esta aplicación permite crear, mostrar, y eliminar productos usando la libreria Json Server."
                    badges={['JavaScript','HTML','CSS','JSON server', 'Node JS']}>
                </CardProject>

                <CardProject 
                    tittle="AluraPlay" 
                    image={imgaluraplay}
                    urlGit="https://github.com/Abraham9804/plataforma-videos" 
                    urlDeploy="https://abraham9804.github.io/plataforma-videos/"
                    description="Plataforma para agregar videos estilo youtube"
                    badges={['JavaScript','HTML','CSS','JSON server', 'Node JS']}>
                </CardProject>

                <CardProject
                    tittle="Encriptador" 
                    image={imgEncriptador}
                    urlGit="https://github.com/Abraham9804/encriptador" 
                    urlDeploy="https://abraham9804.github.io/encriptador/" 
                    description="Encriptador de texto realizado en el curso de Oracle One Next Education"
                    badges={['JavaScript','HTML','CSS']}>
                </CardProject>
            </div>
        </ProjectsStyled>
    )
}

export default Projects 