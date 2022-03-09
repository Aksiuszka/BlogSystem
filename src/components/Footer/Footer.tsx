import React from 'react';
import { FooterContainer, IconGroupper, IconHolders, Icon, TextHolder} from './styled';
import Facebook from './assets/facebook.png'
import Instagram from './assets/instagram.png'
import Twitter from './assets/twitter.png'



function Navbar() {
  return (

    <FooterContainer>
      <TextHolder>Copyrights by Grupa 1</TextHolder>
      <IconGroupper>
      <IconHolders><Icon src={Facebook}/></IconHolders>
      <IconHolders><Icon src={Instagram}/></IconHolders>
      <IconHolders><Icon src={Twitter}/></IconHolders>
      </IconGroupper>
    </FooterContainer>
  );
};

export default Navbar