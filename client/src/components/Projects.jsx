import React, {useEffect, useState} from 'react';
import styles from "../style.js";
import {projects} from "../constants/projects.jsx";
import {Bolt} from "@mui/icons-material";
import {CSSTransition} from "react-transition-group";
import 'animate.css';

//TODO: надо ли импортировать css везде?
const Projects = ({current}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (current === 'projects') {
      setStartAnimation(true);
    }
  }, [current])

  return (
    <div className='h-[100vh] w-full flex flex-col items-center lg:items-start'>
      <div className='flex items-center md:relative md:block'>
        <hr
          className='hidden md:flex absolute mt-4 md:-ml-[1.65rem] lg:ml-[8.35rem] md:mt-[5.3rem] w-[50px] border-0 border-b-8 border-secondary'/>
        <hr
          className='hidden md:flex absolute transition rotate-[90deg] -ml-4 mt-4 md:-ml-[3rem] lg:ml-[7rem] md:mt-[6.65rem] w-[50px] border-0 border-b-8 border-secondary'/>
        <div className='md:hidden pt-[1rem] sm:pt-[5rem]'>
          <Bolt sx={{color: '#00f6ff', height: '38px', width: '38px'}}/>
        </div>
        <CSSTransition
          in={startAnimation}
          timeout={2000}
          classNames={{enter: 'animate__animated animate__headShake animate__slow'}}
          onEntered={() => setStartAnimation(false)}
        >
          <h2 className={`pt-[1rem] sm:pt-[5rem] lg:pl-[10rem] md:pt-[6rem] ${styles.heading2}`}>
            Projects
          </h2>
        </CSSTransition>
        <div className='md:hidden pt-[1rem] sm:pt-[5rem]'>
          <Bolt sx={{color: '#00f6ff', height: '38px', width: '38px'}}/>
        </div>
        <hr
          className='hidden md:flex absolute transition rotate-[90deg] ml-8 mt-4 md:ml-[20rem] lg:ml-[30rem] md:-mt-[1.65rem] w-[50px] border-0 border-b-8 border-secondary'/>
        <hr
          className='hidden md:flex absolute ml-8 mt-4 md:ml-[18.7rem] lg:ml-[28.65rem] md:mt-[0rem] w-[50px] border-0 border-b-8 border-secondary'/>
      </div>

      <ul className={`grid grid-cols-3 grid-flow-row-dense mt-[2rem] md:mt-[4rem] mx-8 md:mx-0`}>
        {projects.map((project, index) =>
          <li key={index}
              className='my-4 col-span-3 md:col-span-1 lg:first:mt-[8rem] lg:mt-[0rem]
              lg:last:-mt-[8rem] flex flex-col sm:flex-row md:flex-col justify-start md:justify-center items-center text-center sm:text-start md:text-center'>
            <CSSTransition
              in={startAnimation}
              timeout={2000}
              classNames={{enter: 'animate__animated animate__flip animate__slow'}}
              onEntered={() => setStartAnimation(false)}
            >
              <a href={project.link} target='_blank'>
                <div
                  className='feature-card rounded-full cursor-pointer transition ease-in-out duration-300 hover:-translate-y-5'>
                  {project.icon}
                </div>
              </a>
            </CSSTransition>
            <p className={`md:w-[80%] px-8 md:px-0 lg:w-[60%] ${styles.paragraph}`}>
              {project.description}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Projects;