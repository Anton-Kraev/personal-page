import React, {useContext, useEffect, useState} from 'react';
import {Feed} from "@mui/icons-material";
import styles from "../../style.js";
import {features} from "../../constants/features.js";
import {PagesContext} from "../../providers/PagesProvider.jsx";
import '../../../node_modules/animate.css/animate.css';
import {CSSTransition} from "react-transition-group";
import '../../index.css'

const About = ({current}) => {
  const {currentPage, setCurrentPage} = useContext(PagesContext);
  setCurrentPage(current);

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (current === 'about') {
      setStartAnimation(true);
    }
  }, [current])

  return (
    <div className='flex max-w-[93%] md:ml-10 justify-center items-center h-[100vh]'>
      <div className={`container ${styles.boxWidth} mb-[2rem] sm:-mb-[3rem] md:-mb-[4rem] h-[80%]`}>
        <CSSTransition
          in={startAnimation}
          timeout={10000}
          classNames={{enter: 'animate__animated animate__slideInLeft animate__slow'}}
          onEntered={() => setStartAnimation(false)}
        >
          <h2
            className={`ml-8 tracking-tight ${styles.heading2}`}>
            {`<About />`}
          </h2>
        </CSSTransition>
        <CSSTransition
          in={startAnimation}
          timeout={10000}
          classNames={{enter: 'animate__animated animate__jackInTheBox animate__slow'}}
          onEntered={() => setStartAnimation(false)}
        >
          <div
            className={`ml-8 feature-card shadow shadow-2xl shadow-white ${styles.padding} col-span-2 md:col-span-1 mt-5 relative rounded-3xl border-2 border-secondary border-solid`}>
            <Feed className='absolute rounded-full -right-5 -top-5 fill-secondary'
                  sx={{color: '#00f6ff', height: '76px', width: '76px'}}/>
            <div className='md:grid md:grid-cols-12 md:items-center'>
              <ul className='col-span-4 list-disc list-inside text-white py-5 ml-5 sm:ml-10 md:ml-0'>
                {features.map((feature, index) =>
                  <li key={index} className='text-[20px] mb-5'>
                    {`${feature.label}: ${feature.content}`}
                  </li>
                )}
              </ul>
              <hr
                className='hidden md:flex transition rotate-[-15deg] -mt-[3rem] -mb-[3rem] h-[22rem] w-[0px] border-0 border-r-2 border-secondary'/>
              <p className={`col-span-7 ${styles.paragraph}`}>
                I was born and raised in Krasnodar region. I am fond of programming, football and motorsport.
                After school, I decided to go to Moscow or St. Petersburg to get a good IT education.
                Finally, I chose software engineering at St. Petersburg State University, where I am currently studying in
                the 2nd year.
              </p>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default About;