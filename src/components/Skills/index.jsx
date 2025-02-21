import styled from "styled-components"
import { TbBrandPhp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import IconSkill from "../IconSkill";

const SkillsStyled = styled.section`

    .contenedor-iconos{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`

const Skills = () => {
    return (
        <SkillsStyled className="contenedor-section">
            <div>
                <h3 className="titulo-section">Skills</h3>
            </div>
            <div className="contenedor-iconos">
                <IconSkill title="PHP" color="#777BB4" Icon={TbBrandPhp}/>
                <IconSkill title="MySQL" color="#4479A1" Icon={SiMysql}/>
                <IconSkill title="JavaScript" color="#F7DF1E" Icon={IoLogoJavascript}/>
                <IconSkill title="React" color="#61DAFB" Icon={FaReact}/>
                <IconSkill title="HTML" color="#E34F26" Icon={TiHtml5}/>
                <IconSkill title="CSS" color="#1572B6" Icon={FaCss3Alt}/>
                <IconSkill title="Bootstrap" color="#7952B3" Icon={TbBrandBootstrap}/>
                <IconSkill title="GIT" color="#F05032" Icon={FaGitAlt}/>
            </div>

           
        </SkillsStyled>
    )
}

export default Skills 