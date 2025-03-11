import styled from "styled-components"

const AboutMeStyles = styled.section`
    min-height: 500px;
    background-color: black;
    padding-top: 130px;
    padding-bottom: 130px;
    div{
        max-width: 600px;
        margin: auto;

        p, h3{
            color: white;
        }
        
        h3{
            margin-bottom: 10px;
        }

        p{
            font-size: 1.2rem;
            line-height: 26px;
        }
    }
`


const AboutMe = () => {
    return (
    <AboutMeStyles className="section-container" id="about">
        <div>
            <h3 className="section-tittle">Sobre Mi</h3>
            <p>Soy un programador web con un año de experiencia en el desarrollo de aplicaciones web,
            con enfoque en el uso de tecnologías como PHP, MySQL, JavaScript y herramientas
            frontend como HTML, CSS, Bootstrap y React. He trabajado en la creación y
            mantenimiento de módulos y funcionalidades dentro de un sistema ERP, así como en la
            optimización de bases de datos y la implementación de funcionalidades interactivas. Estoy
            comprometido con el aprendizaje continuo y con la mejora de mis habilidades, buscando
            siempre aprender nuevas tecnologías y enfoques para resolver problemas de manera
            eficiente.</p>
        </div>
        
    </AboutMeStyles>
    )
}

export default AboutMe