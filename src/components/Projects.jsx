import React from 'react';
import styles from "../style.js";
import {projects} from "../constants/projects.jsx";

const Projects = () => {
  return (
    <div className='col-span-2'>
      <h2 className={`text-center ${styles.heading2}`}>
        Проекты
      </h2>
      <ul className={`grid grid-cols-3`}>
        {projects.map((project, index) =>
          <li className='feature-card rounded-full col-span-3 md:col-span-1 flex flex-col items-center text-center' key={index}>
            {project.icon}
            <p className={`${styles.paragraph}`}>
              {project.description}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Projects;