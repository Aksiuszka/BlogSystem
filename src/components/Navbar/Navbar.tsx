import React from 'react';
import { Nav, IconGroupper, IconHolders, Icon} from './styled';
import HomeIcon from './assets/home.png'
import AboutUs from './assets/users-avatar.png'
import Contact from './assets/phone.png'



function Navbar() {
  return (

    <Nav>
      <IconGroupper>
      <IconHolders><Icon src={HomeIcon}/></IconHolders>
      <IconHolders><Icon src={AboutUs}/></IconHolders>
      <IconHolders><Icon src={Contact}/></IconHolders>
      </IconGroupper>
    </Nav>
  );
};

export default Navbar