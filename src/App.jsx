import styles from './style';
//TODO: добавить экспорты в index
import {About, Feedback, Footer, Home, Metrics, Navbar, Projects} from './components'
import Skills from "./components/Skills.jsx";
import Study from "./components/Study.jsx";
import React from "react";

const App = () => (
  <div className={`bg-[url('assets/bg.jpg')] bg-cover w-full overflow-hidden`}>
    <div className={`bg-primary border-b-2 shadow-md shadow-white ${styles.paddingX} ${styles.flexCenter} -mb-12`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div id='hero' className='mt-14 w-[100vw] h-[100vh] saturate-50'>
      <img className="h-full w-full" src='../src/assets/hero.jpg' alt="photo" />
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`container ${styles.boxWidth}`}>
        <div className={`grid grid-cols-2 xs:gap-4 md:gap-12 contrast-125`}>
          <About/>
          <Skills/>
          <Study/>
          <Projects/>
          <Feedback/>
        </div>
      </div>
    </div>

    <div className={`bg-primary border-t-2 shadow-md shadow-white mt-10 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;