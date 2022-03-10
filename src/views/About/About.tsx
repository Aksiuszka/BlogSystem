import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Circle from 'components/Circle/Circle';
import Menu from 'components/Menu/Menu';
import ContentAbout from 'modules/Content/ContentAbout';
import './style.css';


function About() {
  return (
    <div className="about">
<div className="lightSide">
  <Navbar/>
  </div>
  <Menu><ContentAbout/></Menu>
<div className="darkSide">
  <Footer/>
  </div>

      </div>
  )
}

export default About