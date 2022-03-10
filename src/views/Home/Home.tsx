import React from 'react';
import {
	HeaderField,
	HeaderText,
	LinkContainer,
	LinkHolder,
	MenuContainer,
} from './styled';

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
		</MenuContainer>
	);
}

export default Home;
