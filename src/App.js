import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import TourList from './components/TourList'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main>
    
      <Navbar />
      <TourList/>
      <Footer/>
    </main>
    
  )
}

export default App;
