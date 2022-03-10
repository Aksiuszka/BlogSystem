import styled from 'styled-components';
import { size } from 'constants/breakpoints';
import {
	LIGHT_PURPLE,
	MEDIUM_DARK,
	WHITE_COLOR,
	PRIMARY_GREY,
} from 'constants/colors';

export const Circ = styled.div`
	width: 13rem;
	height: 13rem;
	position: absolute;
	bottom: 4%;
	left: 10%;
	z-index: 20;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e3e3e3;
	box-shadow: 5px 5px 10px #787878, -5px -5px 10px #ffffff;
	@media (max-width: ${size.lg}) {
		width: 8rem;
	height: 8rem;
	}
`;
export const Icon = styled.img`
	height: 6rem;
	width: auto;
`;
