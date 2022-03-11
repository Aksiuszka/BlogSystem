import React from 'react';
import { HeaderMainTextAbout, ImgContainerAbout, MainContainerAbout, ParagraphHolderAbout } from 'views/About/styled';
import {  MainTextContainer, HeaderText, HeaderField, MenuContainer, LinkHolder, LinkContainer } from 'views/Home/styled';
import Pen from './assets/pen.png'

function ContentContact() {
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

               </MainTextContainer>

				<ImgContainerAbout alt="tabletImg" src={Pen}></ImgContainerAbout>
			</MainContainerAbout>
		</MenuContainer>
    </div>
  )
}

export default ContentContact