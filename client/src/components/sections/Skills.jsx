import React, {useEffect, useState} from 'react';
import styles from "../../style.js";
import {Construction} from "@mui/icons-material";
import {skills} from "../../constants/skills.js";
import {Slider} from "@mui/material";
import {CSSTransition} from "react-transition-group";

const Skills = ({current}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (current === 'skills') {
      setStartAnimation(true);
    }
  }, [current])

  return (
    <div className='max-w-[93%] md:ml-10 flex justify-center items-center h-[100vh]'>
      <div className={`container ${styles.boxWidth} mb-[2rem] sm:-mb-[3rem] md:-mb-[4rem] h-[80%]`}>
        <CSSTransition
          in={startAnimation}
          timeout={10000}
          classNames={{enter: 'animate__animated animate__slideInLeft animate__slow'}}
          onEntered={() => setStartAnimation(false)}
        >
          <h2 className={`ml-8 tracking-tight ${styles.heading2}`}>
            {`<Skills />`}
          </h2>
        </CSSTransition>
        <CSSTransition
          in={startAnimation}
          timeout={10000}
          classNames={{enter: 'animate__animated animate__jackInTheBox animate__slow'}}
          onEntered={() => setStartAnimation(false)}
        >
          <div
            className={`ml-8 feature-card ${styles.padding} col-span-2 md:col-span-1 mt-5 relative rounded-3xl border-2 border-secondary border-solid`}>
            <Construction className='absolute rounded-full -right-5 -top-5 fill-secondary'
                          sx={{color: '#00f6ff', height: '76px', width: '76px'}}/>
            <div className='hidden md:flex justify-around items-end'>
              {skills.map((skill, index) =>
                <div key={index}>
                  {skill.skill.split(',').map(el =>
                    <p className={`${styles.paragraph}`}>
                      {el}
                    </p>
                  )}
                  <Slider disabled orientation='vertical' sx={{
                    height: 250,
                    '& input[type="range"]': {
                      WebkitAppearance: 'slider-vertical',
                    },
                  }} className='h-[50px]' defaultValue={skill.rating}/>
                </div>
              )}
            </div>
            <ul className='md:hidden'>
              {skills.map((skill, index) =>
                <li key={index} className='first:mt-8 last:mb-0 mb-5'>
                  <p className={`${styles.paragraph}`}>
                    {skill.skill}
                  </p>
                  <Slider disabled defaultValue={skill.rating}/>
                </li>
              )}
            </ul>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Skills;