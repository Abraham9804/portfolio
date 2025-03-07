import styled from "styled-components";

const IconWrapper = styled.span`
    cursor: pointer;
    display: inline-flex;
    transition: transform 0.25s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`;

const IconContact = ({ url, color, Icon }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <IconWrapper>
                <Icon size={45} color={color} />
            </IconWrapper>
        </a>
    );
};

export default IconContact;
