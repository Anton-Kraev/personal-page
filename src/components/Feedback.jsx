import React, {useState} from 'react';
import styles from "../style.js";
import {Button, MobileStepper, useTheme} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

//TODO: диалог с добавлением отзыва
//TODO: ограничение на максимальную длину комментария и имени
const Feedback = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([
    {name: 'fdsfsdfds', text: 'fdsfdsfsddsadasdasdsadas'},
    {name: 'аавзьпьав', text: 'аавыавылрваьзрипбпавзищпащшь ыавьщ шпашвьщпа щш лазвылазщ '},
    {name: 'аавзьпьав', text: 'аавыавылрваьзрипбпавзищпащшь ыавьщ шпашвьщпа щш лазвылазщ '},
    {name: 'аавзьпьав', text: 'аавыавылрваьзрипбпавзищпащшь ыавьщ шпашвьщпа щш лазвылазщ  fdsm;fds; d;sf osdm sd; fmodsp fosd f[sd,g sd]g,[f gfd[p gd fpg[,df '}
  ]);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = comments.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='col-span-2'>
      <h2 className={`text-center ${styles.heading2}`}>
        Отзывы
      </h2>
      <div className={`grid grid-cols-2 divide-y-2 md:divide-x-2 md:divide-y-0 divide-secondary`}>
        <div className='col-span-2 md:col-span-1 flex flex-col items-center'>
          <div className='w-[80%] flex flex-col pb-3'>
            <h3 className={`${styles.paragraph}`}>
              Оставить отзыв
            </h3>
            <input type='text'
                   className='text-white caret-secondary bg-primary w-full rounded-xl px-3 mt-4 mb-1 py-1 focus:outline-none border-2 border-white focus:border-secondary'
                   placeholder='Имя'/>
            <textarea
              className='resize-y text-white caret-secondary bg-primary w-full rounded-xl px-3 mb-4 mt-1 py-1 focus:outline-none border-2 border-white focus:border-secondary'
              placeholder='Текст'/>
            <div className='w-full flex justify-center'>
              <button
                className='w-[50%] mb-4 text-white feature-card rounded-full ring-2 ring-white hover:ring-offset-1 hover:ring-2 hover:ring-secondary'>
                Отправить
              </button>
            </div>
          </div>
        </div>
        <div className={`col-span-2 md:col-span-1 flex flex-col items-center`}>
          <div className='w-[80%] flex flex-1 flex-col justify-between pb-3'>
            <div>
              <h3 className={`font-poppins font-normal text-white text-[30px] leading-[37.8px] pt-4 pb-2`}>
                {comments[activeStep].name}
              </h3>
              <p className={`${styles.paragraph}`}>
                {comments[activeStep].text}
              </p>
            </div>
            <MobileStepper
              classes={{dot: 'border border-4 border-white', dotActive: 'border-4 border-[#00f6ff]'}}
              sx={{mt: 4, bgcolor: '#00040f'}}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  sx={{color: '#00f6ff'}}
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft/>
                  ) : (
                    <KeyboardArrowRight/>
                  )}
                </Button>
              }
              backButton={
                <Button sx={{color: '#00f6ff'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight/>
                  ) : (
                    <KeyboardArrowLeft/>
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;