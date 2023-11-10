import { css } from "styled-components";

export function Mobile(props){
return css`
@media screen and (min-width: 190px) and (max-width: 800px) {
    ${props}
}

`;
}

export function Tab(props){
    return css`
    @media screen and (max-width: 855px) {
        ${props}
    }
    
    `;
    }