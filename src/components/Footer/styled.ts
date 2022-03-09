import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import { LIGHT_PURPLE, MEDIUM_DARK, WHITE_COLOR, PRIMARY_GREY } from 'constants/colors';



export const FooterContainer = styled.footer`
width:50%;
position: fixed;
bottom: 15px;
z-index: 10;
border-radius:40px;
display:flex;
justify-content: flex-end;
`;
export const IconGroupper = styled.header`
width:35%;
display:flex;
justify-content:space-around;
@media (max-width: ${size.md}) {
    flex-direction: column;
    margin-top:20%;
    margin-bottom:10%;
}
`;

export const IconHolders = styled.div`
height: 50px;
width: 50px ;
border-radius:50%;
background: #ebebeb;
background: #26272C;
box-shadow: inset 6px 6px 8px #0f1012,
            inset -6px -6px 8px #3d3e46;
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
export const TextHolder = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: ${PRIMARY_GREY};
@media (max-width: ${size.md}) {
    position: absolute;
    bottom: 0;
    padding: 0 10px 0 0;
}
`;