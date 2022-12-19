import React, {useContext} from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Feedback from "./components/Feedback.jsx";
import {About, Projects} from "./components/index.js";
import Study from "./components/Study.jsx";
import Skills from "./components/Skills.jsx";
import Sidebar from "./components/Sidebar.jsx";
import {PagesContext, PagesProvider} from "./PagesProvider";
import usePagination from "@mui/material/usePagination";
import Home from "./components/Home.jsx";
import Guests from "./components/Guests.jsx";
import Navbar from "./components/Navbar.jsx";
import styles from "./style.js";

//TODO:убрать элемент guests и перенести все из него в feedback, вынести общие классы каждой секции
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
        anchors={['home', 'about', 'study', 'skills', 'projects', 'guests']}
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
                <Guests current={current}/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </PagesProvider>
  );
};

export default Fullpage;