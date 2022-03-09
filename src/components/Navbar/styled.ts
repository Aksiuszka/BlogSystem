import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import { LIGHT_PURPLE, MEDIUM_DARK, WHITE_COLOR, PRIMARY_GREY } from 'constants/colors';



export const Nav = styled.header`
width:50%;
position: fixed;
top: 15px;
z-index: 10;
border-radius:40px;
display:flex;
justify-content: flex-start;
`;
export const IconGroupper = styled.header`
width:35%;
display:flex;
justify-content:space-around;
@media (max-width: ${size.md}) {
    flex-direction: column;
    margin-top:20%;
}
`;

export const IconHolders = styled.div`
height: 50px;
width: 50px ;
border-radius:50%;
background: #ebebeb;
box-shadow: inset 5px 5px 8px #cccccc,
            inset -5px -5px 8px #ffffff;
display:flex;
justify-content:center;
align-items: center;
@media (max-width: ${size.md}) {
    flex-direction: column;
    margin-bottom:20px;
}
`;
export const Icon = styled.img`
height: 1.5rem;
width: auto;
`;