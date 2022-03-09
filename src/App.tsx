import React from 'react';
import './App.css';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
         <div className="lightSide"></div>
      <Navbar></Navbar>
      <div className="darkSide">
        <Footer></Footer>
        </div>

    </div>
  );
}

export default App;
