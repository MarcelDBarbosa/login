import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
background: #565656;
border-radius: 22px;
position: relative;
color: #FFFFFF;
padding: 2px 12px;
min-width: 120px;
width: 100%;
${({variant}) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    background: #0c60b4;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`}
`