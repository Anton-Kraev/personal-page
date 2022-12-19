import React, {useEffect, useState} from 'react';
import styles from "../style.js";
import {Build, Circle, Feed, SafetyCheck, School} from "@mui/icons-material";
import {study} from "../constants/study.js";
import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  styled
} from "@mui/material";
import {CSSTransition} from "react-transition-group";

const QontoConnector = styled(StepConnector)(({theme}) => ({
  [`& .${stepConnectorClasses.line}`]: {
    marginTop: -25,
    borderColor: '#00f6ff',
    borderInlineStartWidth: 3,
    height: 100
  },
}));

const QontoStepIconRoot = styled('div')(({theme, ownerState}) => ({
  color: '#00f6ff',
  display: 'flex',
  alignItems: 'center',
  '& .QontoStepIcon-circle': {
    marginInlineStart: 7,
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const {active, completed, className} = props;

  return (
    <QontoStepIconRoot ownerState={{active}} className={className}>
      <div className="QontoStepIcon-circle"/>
    </QontoStepIconRoot>
  );
}

const Study = ({current}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (current === 'study') {
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
            {`<Study />`}
          </h2>
        </CSSTransition>
        <CSSTransition
          in={startAnimation}
          timeout={10000}
          classNames={{enter: 'animate__animated animate__jackInTheBox animate__slow'}}
          onEntered={() => setStartAnimation(false)}
        >
          <div
            className={`ml-8 feature-card sm:px-16 px-6 py-4 mt-5 relative rounded-3xl border-2 border-secondary border-solid`}>
            <School className='absolute rounded-full -right-5 -top-5 fill-secondary'
                    sx={{color: '#00f6ff', height: '76px', width: '76px'}}/>
            <div className='flex flex-col sm:flex-row sm:justify-around'>
              <div>
                <h3
                  className='font-poppins font-normal xs:text-[36px] text-[30px] text-white xs:leading-[50px] leading-[40px] w-full'>
                  Education
                </h3>
                <Stepper orientation='vertical' connector={<QontoConnector/>}>
                  {study.education.map((el, i) =>
                    <Step active={true} key={i}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        <p className='text-[20px] text-white inline'>
                          {el.header}
                        </p>
                        <p className='pl-5 text-white inline'>
                          {el.date}
                        </p>
                      </StepLabel>
                      <StepContent>
                        <p className='text-[18px] text-dimWhite'>
                          {el.name}
                        </p>
                      </StepContent>
                    </Step>
                  )}
                </Stepper>
              </div>
              <div className='mt-5 sm:mt-0'>
                <h3
                  className='font-poppins font-normal xs:text-[36px] text-[30px] text-white xs:leading-[50px] leading-[40px] w-full'>
                  Courses
                </h3>
                <Stepper orientation='vertical' connector={<QontoConnector/>}>
                  {study.courses.map((el, i) =>
                    <Step active={true} key={i}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        <p className='text-[20px] text-white inline'>
                          {el.header}
                        </p>
                        <p className='pl-5 text-white inline'>
                          {el.date}
                        </p>
                      </StepLabel>
                      <StepContent>
                        <p className='text-[18px] text-dimWhite'>
                          {el.name}
                        </p>
                      </StepContent>
                    </Step>
                  )}
                </Stepper>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Study;