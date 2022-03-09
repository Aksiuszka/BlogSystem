import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import { LIGHT_PURPLE, MEDIUM_DARK, WHITE_COLOR, PRIMARY_GREY } from 'constants/colors';



export const MenuContainer = styled.div`
width:70%;
height:70%;
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
z-index: 10;
border-radius:15px;
display:flex;
justify-content: center;
background: #ebebeb;
box-shadow:  5px 1px 3px #26272C,
             -5px -0.5px 3px #ffffff;
`;
