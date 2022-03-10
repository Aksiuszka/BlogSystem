import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import { LIGHT_PURPLE, MEDIUM_DARK, WHITE_COLOR, PRIMARY_GREY } from 'constants/colors';


export const MenuContainer = styled.div`
width:100%;
height: 100%%;
display: flex;
`
;

export const HeaderField = styled.div`
position: absolute;
top: 0;
left:0;
width:96%;
margin-left: 2%;
margin-top: 2%;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: ${size.md}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    margin-left: -15%;
    margin-top: 2%;
}
`;

export const HeaderText = styled.h2`
color: #26272c;
font-size: 30px;
@media (max-width: ${size.md}) {
    flex-direction: row;
    width: 100%;
    margin-left:33%;
`;
export const LinkContainer = styled.div`
width: 45%;
display: flex;
justify-content: space-between;
@media (max-width: ${size.md}) {
    flex-direction: row;
    width: 100%;
    margin-left:24%;
}
`;
export const LinkHolder = styled.p`
color: #26272c;
font-size: 1rem;
@media (max-width: ${size.md}) {
    margin-top:5%;
    margin-left:5%;
font-size: 0.75rem;
}
`;