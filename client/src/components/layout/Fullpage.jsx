import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Study from "../sections/Study.jsx";
import Skills from "../sections/Skills.jsx";
import {PagesProvider} from "../../providers/PagesProvider.jsx";
import Home from "../sections/Home.jsx";
import Feedback from "../sections/Feedback.jsx";
import Navbar from "./Navbar.jsx";
import styles from "../../style.js";
import Projects from "../sections/Projects.jsx";
import About from "../sections/About.jsx";

const Fullpage = () => {
  return (
    <PagesProvider initialPage='hero'>
      <div className={`fixed z-10 w-full sm:bg-primary sm:border-b-2 sm:shadow-md sm:shadow-white ${styles.paddingX} flex-row justify-end`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <ReactFullpage
        gplv3-license={true}
        scrollingSpeed={500}
        anchors={['home', 'about', 'study', 'skills', 'projects', 'feedback']}
        onLeave={function (origin, destination, direction) {
          console.log(destination)
        }}
        render={({state, fullpageApi}) => {
          const current = fullpageApi?.getActiveSection()?.anchor ?? 'home';
          return (
            <ReactFullpage.Wrapper>
              <div className='section overflow-x-hidden'>
                <Home current={current}/>
              </div>
              <div className='section bg-primary overflow-x-hidden'>
                <About current={current}/>
              </div>
              <div className='section bg-primary overflow-x-hidden'>
                <Study current={current}/>
              </div>
              <div className='section bg-primary overflow-x-hidden'>
                <Skills current={current}/>
              </div>
              <div className='section bg-primary overflow-x-hidden'>
                <Projects current={current}/>
              </div>
              <div className='section bg-primary overflow-x-hidden'>
                <Feedback current={current}/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </PagesProvider>
  );
};

export default Fullpage;