import React from 'react';
import styles from "../style.js";
import {Build} from "@mui/icons-material";
import {study} from "../constants/study.js";
import {Step, StepContent, StepLabel, Stepper} from "@mui/material";

const Study = () => {
  return (
    <div id='study'
         className={`feature-card ${styles.padding} col-span-2 md:col-span-1 mt-5 relative rounded-3xl border-2 border-secondary border-dotted hover:border-solid`}>
      <Build className='absolute rounded-full -right-3 -top-3 fill-secondary'
             sx={{color: '#00f6ff', height: '38px', width: '38px'}}/>
      <h2 className={`${styles.heading2} text-center`}>
        Study
      </h2>
      <h3
        className='font-poppins font-normal xs:text-[30px] text-[25px] text-white xs:leading-[50px] leading-[40px] w-full'>
        Education
      </h3>
      <Stepper alternativeLabel activeStep={-1} orientation='vertical'>
        {study.education.map((el, i) =>
          <Step key={i}>
            <StepLabel>{el.header}</StepLabel>
            <StepContent>{el.name}</StepContent>
          </Step>
        )}
      </Stepper>
      <h3
        className='font-poppins font-normal xs:text-[30px] text-[25px] text-white xs:leading-[50px] leading-[40px] w-full'>
        Courses
      </h3>
      <Stepper alternativeLabel activeStep={-1} orientation='vertical'>
        {study.courses.map((el, i) =>
          <Step key={i}>
            <StepLabel>{el.header}</StepLabel>
            <StepContent>{el.name}</StepContent>
          </Step>
        )}
      </Stepper>
    </div>
  );
};

export default Study;