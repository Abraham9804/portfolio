import { useState } from "react";
import styled from "styled-components"

const FormContactoStyles = styled.section`

    form{
        margin: auto auto;
        max-width: 600px;
        display:flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
            0 -4px 6px rgba(0, 0, 0, 0.1), 
            4px 0 6px rgba(0, 0, 0, 0.1), 
            -4px 0 6px rgba(0, 0, 0, 0.1);
        padding-top: 50px;
        border-radius: 10px;
        div{
            width:80%;
            text-align: left;

            label{
                display: block;
                margin-bottom: 10px;
                color: rgba(74, 85, 104, 1);
                font-weight: 500;
                font-size: 1.25rem;
                line-height: 1.625;
            }

            input, textarea {
                width: 100%;
                padding: 15px 10px;
                border-radius: 10px;
                margin-bottom: 25px;
                border: 1px solid rgba(74, 85, 104, .3);
            }

            input:focus, textarea:focus{
                outline:2px solid rgba(74, 85, 104, .3);
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
            font-size: 1.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        input[type=submit]:hover{
            transform: scale(1.05); 
        }
       
    }
`

const FormContacto = () => {
    function handlesubmit(e){
        e.preventDefault();
        console.log('form enviado', nombre, ' ',correo,' ',asunto, ' ', mensaje)
        formValidate()
    }

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [errores, setErrores] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: ""
    });

    function formValidate(){
        const errorsTemp = {}

        if(nombre.trim() === ""){
            errorsTemp.nombre = "El nombre es obligatorio"
        }

        setErrores(errorsTemp)
    }
    

    return (
        <FormContactoStyles className="contenedor-section">
            <h3 className="titulo-section">Contactame</h3>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder={errores.nombre ? errores.nombre : "Introduzca su nombre"} onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="nombre">Correo</label>
                    <input type="email" name="correo" id="correo" onChange={(e)=> setCorreo(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="nombre">Asunto</label>
                    <input type="text" name="asunto" id="asunto" onChange={(e)=> setAsunto(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" onChange={(e)=> setMensaje(e.target.value)}></textarea>
                </div>
                
                <input type="submit" value="Enviar" id="btnEnviar"/>
            </form>
        </FormContactoStyles>
    )
}

export default FormContacto