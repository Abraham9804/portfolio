import { useState } from "react";
import styled from "styled-components"

const ContactFormStyles = styled.section`

    form{
        margin: auto auto;
        max-width: 600px;
        display:flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 
            0 2px 4px rgba(0, 0, 0, 0.05);
        padding-top: 50px;
        border-radius: 10px;
        div{
            width:80%;
            text-align: left;

            label{
                display: block;
                margin-top: 25px;
                margin-bottom: 10px;
                color: rgba(74, 85, 104, 1);
                font-weight: 500;
                font-size: 1.25rem;
                line-height: 1.625;
            }

            input, textarea{
                width: 100%;
                padding: 15px 10px;
                border-radius: 10px;
            }

            .input-styles{
                border: 1px solid rgba(74, 85, 104, .3);
            }

            .input-error{
                border: 1px solid rgba(248, 18, 18, 0.822);
            }

            input:focus, textarea:focus{
                outline:2px solid rgba(74, 85, 104, .3);
            }

            textarea{
                min-height: 150px;
                resize: none;
            }

            .texto-error{
                color: red;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }

        input[type=submit]{
            padding: 10px 25px;
            background-color: #222;
            color: white;
            border-radius: 10px;
            margin-top: 10px;
            margin-bottom: 50px;
            font-size: 1.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        input[type=submit]:hover{
            background-color: black;
        }
       
    }
`

const ContactForm = () => {
    const campos = ['nombre', 'correo', 'asunto', 'mensaje'];
    const [errores, setErrores] = useState({});
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: ""
    })
    
    function handlesubmit(e){
        e.preventDefault()
        if(formValidate()){
            console.log("Enviar correo ", formData)
        }else{
            console.log("faltan datos")
        }
    }

    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    function formValidate(){
        const errorsTemp = {}

        if(!formData.nombre.trim()){
            errorsTemp.nombre = "El nombre es obligatorio"
        }

        if(!formData.correo.trim()){
            errorsTemp.correo = "El correo es obligatorio"
        }else if(!/\S+@\S+\.\S+/.test(formData.correo)){
            errorsTemp.correo = "El correo no tiene un formato valido"
        }

        if(!formData.asunto.trim()){
            errorsTemp.asunto = "El asunto es obligatorio"
        }

        if(!formData.mensaje.trim()){
            errorsTemp.mensaje = "El mensaje es obligatorio"
        }

        setErrores(errorsTemp)
        return Object.keys(errorsTemp).length === 0
    }
    
    return (
        <ContactFormStyles className="section-container" id="contact">
            <h3 className="section-tittle">Contactame</h3>
            <form onSubmit={handlesubmit} noValidate>
                {
                    campos.map(campo =>
                        (
                            <div key={campo}>
                                <label htmlFor={campo}>{campo}</label>
                                { campo == "mensaje" ? (
                                    <textarea name="mensaje" id="mensaje" className={errores.mensaje ? "input-error" : "input-styles"} 
                                    value={formData.mensaje} placeholder="Introduzca un mensaje" onChange={handleChange}></textarea> 
                                ):(
                                    <input type="text" name={campo} id={campo} className={errores[campo] ? "input-error" : "input-styles"} 
                                    value={formData[campo]} placeholder={`Introduzca su ${campo}`} onChange={handleChange}/>
                                )
                                }
                                {errores[campo] ? <p className="texto-error">{errores[campo]}</p>: ""}
                            </div>
                        )
                    )
                }
               
                <input type="submit" value="Enviar" id="btnEnviar"/>
            </form>
        </ContactFormStyles>
    )
}

export default ContactForm