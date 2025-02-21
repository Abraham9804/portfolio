import styled from "styled-components"

const SobreMiStyles = styled.section`
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


const SobreMi = () => {
    return (
    <SobreMiStyles className="contenedor-section">
        <div>
            <h3 className="titulo-section">Sobre Mi</h3>
            <p>Soy un desarrollador web con experiencia en la creación de aplicaciones dinámicas y eficientes. Mi especialidad es el backend con PHP y MySQL, 
            donde me enfoco en la optimización y administración de bases de datos. También tengo habilidades en el desarrollo frontend, utilizando JavaScript, React, HTML, 
            CSS, Bootstrap y jQuery para crear interfaces interactivas y responsivas.</p>
        </div>
        
    </SobreMiStyles>
    )
}

export default SobreMi