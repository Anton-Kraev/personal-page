import React from 'react';
import {Feed} from "@mui/icons-material";
import styles from "../style.js";
import {features} from "../constants/features.js";

const About = () => {
  return (
    <div id='about'
         className={`feature-card ${styles.padding} col-span-2 md:col-span-1 mt-5 relative rounded-3xl border-2 border-secondary border-dotted hover:border-solid`}>
      <Feed className='absolute rounded-full -right-3 -top-3 fill-secondary'
            sx={{color: '#00f6ff', height: '38px', width: '38px'}}/>
      <h2 className={`${styles.heading2}`}>
        Обо мне
      </h2>
      <ul className='list-disc list-inside'>
        {features.map((feature, index) =>
          <li key={index}>
            {`${feature.label}: ${feature.content}`}
          </li>
        )}
      </ul>
      <p className={`indent-8 ${styles.paragraph}`}>
        Родился и вырос в Краснодарском крае. Увлекаюсь программированием, автомобилями и футболом.
        После школы решил поехать в Москву или Санкт-Петербург учиться на it-направление. Долго выбирал, но остановился
        на программной инженерии СПбГУ, где и учусь на данный момент на 2 курсе.
      </p>
    </div>
  );
};

export default About;