import React from 'react';
import './App.css';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import Circle from 'components/Circle/Circle';
import Home from 'views/Home/Home';

function App() {
	return (
		<div className="App">
			<div className="lightSide">
				<Navbar />
			</div>
			<Menu><Home/></Menu>
			<Circle/>
			<div className="darkSide">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
