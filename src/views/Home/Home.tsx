import React from 'react';
import {
	HeaderField,
	HeaderMainText,
	HeaderText,
	ImgContainer,
	LinkContainer,
	LinkHolder,
	MainContainer,
	MainTextContainer,
	MenuContainer,
	ParagraphHolder,
} from './styled';
import Keyboard from './assets/keyboard.png';

function Home() {
	return (
		<MenuContainer>
			<HeaderField>
				<HeaderText>bloggo</HeaderText>
				<LinkContainer>
					<LinkHolder>home</LinkHolder>
					<LinkHolder>log in</LinkHolder>
					<LinkHolder>get started</LinkHolder>
					<LinkHolder>about bloggo</LinkHolder>
				</LinkContainer>
			</HeaderField>
			<MainContainer>
				<MainTextContainer>
					<HeaderMainText>Next lvl of Blogging</HeaderMainText>
					<ParagraphHolder>Experience bloggo. find yourself.</ParagraphHolder>
				</MainTextContainer>

				<ImgContainer alt="coffeeImg" src={Keyboard}></ImgContainer>
			</MainContainer>
		</MenuContainer>
	);
}

export default Home;
