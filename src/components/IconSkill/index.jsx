import styled from "styled-components"

const IconSkillStyled = styled.article`
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    padding: 15px;
    &:hover{
        transform: scale(1.2)
    }
`

const IconSkill = ({title, color, Icon}) => {
    return (
        <IconSkillStyled >
            <Icon color={color} fontSize={80}/>
            <p>{title}</p>
        </IconSkillStyled>
    )
}

export default IconSkill