import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Home from './components/home';
import Navbar from './components/navbar';


const App = () => {

  AOS.init({
    duration: 1000
  })

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <Navbar AOS={'data-aos="fade-in"'} />
      <Home />

    </div>
  );
}

export default App;
