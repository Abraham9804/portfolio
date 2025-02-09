import styled from "styled-components"
import imagen from "./img.png"
const BannerStyles = styled.section`
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 250px;
   
    .contenedor-text{
       
        text-align: center;
        padding-bottom: 100px;
        padding-left: 32px;
        padding-right: 32px;
        .titulo-section{
            width: 100%;
            color: black;
            font-size: 2.5rem;
            font-weight: 500;
        }

        p{
            font-size: 1.5rem;
            color: #615151;
            font-weight: 500;
            line-height: 1.2;
        }
    }

   
    img{
        width: 500px;
    }
    
`

const Banner = () => {
    return <BannerStyles>
                <div className="contenedor-text">
                    <h2 className="titulo-section">Hola, soy Abraham Romero</h2>
                    <p>Web developer</p>
                </div>
                
                <img src={imagen} alt="img"/>
                
            </BannerStyles>
}

export default Banner