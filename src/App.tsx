import React from 'react';
import './App.css';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';

function App() {
	return (
		<div className="App">
			<div className="lightSide">
				<Navbar />
			</div>
			<Menu />
			<div className="darkSide">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
