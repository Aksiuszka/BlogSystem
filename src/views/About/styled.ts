import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import {
	LIGHT_PURPLE,
	MEDIUM_DARK,
	WHITE_COLOR,
	PRIMARY_GREY,
} from 'constants/colors';

export const HeaderMainTextAbout = styled.h2`
color: #26272c;
font-size: 45px;
margin-top:70px;
@media (max-width: ${size.lg}) {
    font-size: 30px;
    flex-direction: row;
    width: 100%;
} 
`;
export const MainContainerAbout = styled.div`
width:97%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
@media (max-width: ${size.lg}) {
	width:67%;
	margin-top:0%;
	margin-left:10.5%;
 flex-direction: column;
 justify-content: flex-start;
}
`
;
export const ParagraphHolderAbout = styled.p`
color: #26272c;
margin-top:18px;
font-size: .9 rem;
letter-spacing:2px;
@media (max-width: ${size.md}) {
    margin-top:5%;
    font-size: 0.65rem;
}
`;
export const ImgContainerAbout = styled.img`
width:496px;
height:289px;
@media (max-width: ${size.lg}) {
    margin-top:2%;
	margin-left:1%;
    margin-bottom:10%;
    width:356px;
    height:159px;
}
`
;
export const Input = styled.input`
background-color: transparent;
border:none;
border-bottom: 2px solid ${MEDIUM_DARK};
&:focus {
    outline: none;
}
`;