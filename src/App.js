import React, { useEffect } from 'react';
import styles from './App.module.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import Home from './components/home';
import Navbar from './components/navbar';
import Projects from './components/projects';


const App = () => {

  AOS.init({
    duration: 1000
  })

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={styles.App}>
      <Navbar AOS={'data-aos'} />
      <Home AOS={'data-aos'} />
      <Projects />
    </div>
  );
}

export default App;
