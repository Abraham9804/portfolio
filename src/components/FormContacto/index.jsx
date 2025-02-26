import styled from "styled-components"

const FormContactoStyles = styled.section`

    form{
        margin: auto auto;
        max-width: 600px;
        display:flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
        div{
            width:80%;
            text-align: left;
            label{
                display: block;
                margin-bottom: 10px;
                color: rgba(74, 85, 104, 1);
            }
            input, textarea {
                width: 100%;
                padding: 15px 10px;
                border-radius: 10px;
                margin-bottom: 25px;
            }

            textarea{
                min-height: 150px;
            }
        }

        input[type=submit]{
            padding: 10px 25px;
            background-color: black;
            color: white;
            border-radius: 10px;
            margin-bottom: 50px;
        }
       
    }
`

const FormContacto = () => {
    return (
        <FormContactoStyles className="contenedor-section">
            <h3 className="titulo-section">Contactame</h3>
            <form >
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre"/>
                </div>
                <div>
                    <label htmlFor="nombre">Correo</label>
                    <input type="email" name="correo" id="correo"/>
                </div>
                <div>
                    <label htmlFor="nombre">Asunto</label>
                    <input type="text" name="asunto" id="asunto"/>
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje"></textarea>
                </div>
                
                <input type="submit" value="Enviar" id="btnEnviar"/>
            </form>
        </FormContactoStyles>
    )
}

export default FormContacto