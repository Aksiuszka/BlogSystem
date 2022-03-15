import React, {Component} from 'react';
import { HeaderMainTextAbout, ImgContainerAbout, MainContainerAbout, ParagraphHolderAbout, Input } from 'views/About/styled';
import {  MainTextContainer, HeaderText, HeaderField, MenuContainer, LinkHolder, LinkContainer, ParagraphHolder } from 'views/Home/styled';
import { InputContainer } from 'components/Form/styled';
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
			<InputContainer>
				<MainTextContainer>
				<ParagraphHolder>name:</ParagraphHolder>
				<Input></Input>
				<ParagraphHolder>email:</ParagraphHolder>
				<Input></Input>
				<ParagraphHolder>message:</ParagraphHolder>
				<Input></Input>
               </MainTextContainer>
				<ImgContainerAbout alt="tabletImg" src={Pen}></ImgContainerAbout>
			</InputContainer>
		</MenuContainer>
    </div>
  )
}

export default ContentContact