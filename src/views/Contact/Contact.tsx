import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import ContentContact from 'modules/ContentContact/ContentContact';
import './style.css';

function Contact() {
	return (
		<div className="about">
			<div className="lightSide">
				<Navbar />
			</div>
      <Menu><ContentContact/></Menu>
			<div className="darkSide">
				<Footer />
			</div>
		</div>
	);
}
export default Contact;
