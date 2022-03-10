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
    font-size: 40px;
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
margin-top:7%;
@media (max-width: ${size.lg}) {
 flex-direction: column;
 justify-content: flex-start;
}
`
;