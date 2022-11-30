import React from 'react';
import styles from "../style.js";
import {Build} from "@mui/icons-material";
import {skills} from "../constants/skills.js";
import {Slider} from "@mui/material";

const Skills = () => {
  return (
    <div id='skills'
         className={`feature-card ${styles.padding} col-span-2 md:col-span-1 mt-5 relative rounded-3xl border-2 border-secondary border-dotted hover:border-solid`}>
      <Build className='absolute rounded-full -right-3 -top-3 fill-secondary'
            sx={{color: '#00f6ff', height: '38px', width: '38px'}}/>
      <h2 className={`${styles.heading2}`}>
        Навыки
      </h2>
      <ul>
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
  );
};

export default Skills;