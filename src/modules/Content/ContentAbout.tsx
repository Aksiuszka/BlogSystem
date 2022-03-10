import React from 'react';
import { HeaderMainTextAbout, MainContainerAbout } from 'views/About/styled';
import { MainContainer, MainTextContainer, HeaderText, HeaderField, MenuContainer, LinkHolder, ParagraphHolder, ImgContainer, LinkContainer } from 'views/Home/styled';
import Tablet from './assets/tablet.png'

function ContentAbout() {
  return (
    <div>

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
			<MainContainerAbout>
				<MainTextContainer>
                    <HeaderMainTextAbout>most important in detail </HeaderMainTextAbout>
                <ParagraphHolder>Bloggo Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit excepturi, corrupti minus aut ab, veniam at laboriosam ..</ParagraphHolder>
               </MainTextContainer>

				<ImgContainer alt="tabletImg" src={Tablet}></ImgContainer>
			</MainContainerAbout>
		</MenuContainer>
    </div>
  )
}

export default ContentAbout