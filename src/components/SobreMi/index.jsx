import styled from "styled-components"

const SobreMiStyles = styled.section`
    width: 100%;
    height: 500px;
    background-color: #262626;
    padding: 130px 32px;
    text-align: center;

    div{
        max-width: 600px;
        margin: auto;

        p, h3{
            color: white;
        }

        p{
            font-size: 1.2rem;
            line-height: 26px;
            
        }
    }
`


const SobreMi = () => {
    return (
    <SobreMiStyles>
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