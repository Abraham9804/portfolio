import styled from "styled-components"

const FooterStyles = styled.footer`
    width: 100%;
    height: 100px;
    background-color: black;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        //font-size: 1.2rem;
        font-weight: 600;
        color: white;
    }
`


const Footer = () => {
    return (
        <FooterStyles>
            <p>Desarrollado por Abraham Romero { new Date().getFullYear()}</p>
        </FooterStyles>
    )
}

export default Footer