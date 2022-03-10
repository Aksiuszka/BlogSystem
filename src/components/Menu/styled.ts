import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import {
	LIGHT_PURPLE,
	MEDIUM_DARK,
	WHITE_COLOR,
	PRIMARY_GREY,
} from 'constants/colors';

export const MenuContainer = styled.div`
	width: 63%;
	height: 70%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	background: #e3e3e3;
	box-shadow:  3px 3px 6px #404040,
				-8px 0px 7px #ffffff;
`;
