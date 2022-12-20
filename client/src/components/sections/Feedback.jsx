import React, {useEffect, useState} from 'react';
import styles from "../../style.js";
import {IconButton, MobileStepper, useTheme} from "@mui/material";
import {FormatQuote, KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {contacts} from "../../constants/contacts.jsx";
import AddTestimonialModal from "../modals/AddTestimonialModal.jsx";
import {CSSTransition} from "react-transition-group";
import useHttp from "../../hooks/http.hook.js";

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() < 9 ? 0 + `${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? 0 + `${date.getDate()}` : date.getDate();
  const hour = date.getHours() < 10 ? 0 + `${date.getHours()}` : date.getHours();
  const minute = date.getMinutes() < 10 ? 0 + `${date.getMinutes()}` : date.getMinutes();

  return `${hour}:${minute} ${day}.${month}.${year}`;
}

Array.prototype.multiget = function () {
  let args = Array.apply(null, arguments);
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result.push(this[args[i]]);
  }

  return result;
}

const Feedback = ({current}) => {
  const get = useHttp();
  const post = useHttp();

  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([{name: '', text: '', date: ''}]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetched = await get.request('/api/comments');
        setComments(fetched.reverse());
      } catch (e) {}
    };
    fetchComments();
  }, [get.request]);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = comments.length;

  const addTestimonial = async (name, text, date) => {
    try {
      await post.request('/api/comments', 'POST', {name: name, text: text, date: formatDate(date)})
      setComments(prev => [{name: name, text: text, date: formatDate(date)}, ...prev]);
      setActiveStep(0);
      setOpen(false);
    } catch (e) {}
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep !== maxSteps - 1 ? prevActiveStep + 1 : 0);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep !== 0 ? prevActiveStep - 1 : maxSteps - 1);
  };

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (current === 'feedback') {
      setStartAnimation(true);
    }
  }, [current])

  return (
    <div className='h-[100vh] w-full flex flex-col items-center pt-5'>
      <div className='justify-self-start flex flex-col items-center justify-center sm:mt-[4rem]'>
        <div className='flex flex-row justify-center items-center'>
          <hr className='w-[50px] border-0 border-b-4 border-secondary'/>
          <CSSTransition
            in={startAnimation}
            timeout={10000}
            classNames={{enter: 'animate__animated animate__flipInX animate__slow'}}
            onEntered={() => setStartAnimation(false)}
          >
            <h3
              className='text-center font-poppins font-semibold xs:text-[52px] text-[40px] text-white xs:leading-[66px] leading-[57px] w-full'>
              Testimonials
            </h3>
          </CSSTransition>
          <hr className='w-[50px] border-0 border-b-4 border-secondary'/>
        </div>
        <div className='flex flex-col justify-center items-center mx-0 md:mx-8 overflow-hidden'>
          <div className='grid grid-cols-12 gap-8 items-center pt-4'>
            {comments.multiget(activeStep ? activeStep - 1 : comments.length - 1, activeStep, activeStep !== comments.length - 1 ? activeStep + 1 : 0)
              .map((comment, index) =>
                <div key={index}
                     className={`${comment.date === comments[activeStep].date
                       ? 'col-span-12 md:col-span-4 mx-10 md:mx-0 flex flex-col'
                       : 'hidden md:flex md:flex-col col-span-4'
                     } border-2 border-secondary rounded-xl px-2 pb-1`}
                >
                  <h4 className={`text-center font-poppins font-normal text-white text-[25px] leading-[37.8px] py-2`}>
                    {comment.name}
                  </h4>
                  <hr className=''/>
                  <CSSTransition
                    in={startAnimation}
                    timeout={20000}
                    classNames={{enter: 'animate__animated animate__lightSpeedInRight animate__slow'}}
                    onEntered={() => setStartAnimation(false)}
                  >
                    <FormatQuote className='self-start'
                                 sx={{color: '#00f6ff', height: '26px', width: '26px'}}></FormatQuote>
                  </CSSTransition>
                  <CSSTransition
                    in={startAnimation}
                    timeout={10000}
                    classNames={{enter: 'animate__animated animate__zoomIn animate__slow'}}
                    onEntered={() => setStartAnimation(false)}
                  >
                    <p
                      className={`text-center italic font-poppins font-normal text-dimWhite text-[20px] leading-[25px]`}>
                      {comment.text}
                    </p>
                  </CSSTransition>
                  <CSSTransition
                    in={startAnimation}
                    timeout={10000}
                    classNames={{enter: 'animate__animated animate__lightSpeedInLeft animate__slow'}}
                    onEntered={() => setStartAnimation(false)}
                  >
                    <FormatQuote className='self-end'
                                 sx={{color: '#00f6ff', height: '26px', width: '26px'}}></FormatQuote>
                  </CSSTransition>
                  <hr className=''/>
                  <p className='text-center text-white text-[12px]'>
                    {comment.date}
                  </p>
                </div>
              )
            }
          </div>
        </div>
        <MobileStepper
          classes={{dot: 'border border-4 border-white', dotActive: 'border-4 border-[#00f6ff]'}}
          sx={{mt: 4, bgcolor: '#00040f'}}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              sx={{color: '#00f6ff'}}
              size="medium"
              onClick={handleNext}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft sx={{width: '40px', height: '40px'}}/>
              ) : (
                <KeyboardArrowRight sx={{width: '40px', height: '40px'}}/>
              )}
            </IconButton>
          }
          backButton={
            <IconButton sx={{color: '#00f6ff'}} size="medium" onClick={handleBack}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight sx={{width: '40px', height: '40px'}}/>
              ) : (
                <KeyboardArrowLeft sx={{width: '40px', height: '40px'}}/>
              )}
            </IconButton>
          }
        />
        <button
          onClick={() => setOpen(true)}
          className='px-2 mb-4 text-white rounded-full border-2 border-secondary hover:scale-[1.1]'>
          Add your testimonial
        </button>
      </div>
      <div className='flex flex-col items-center pt-5'>
        <div className='flex flex-row justify-center items-center'>
          <hr className='w-[50px] border-0 border-b-4 border-secondary'/>
          <CSSTransition
            in={startAnimation}
            timeout={10000}
            classNames={{enter: 'animate__animated animate__flipInX animate__slow'}}
            onEntered={() => setStartAnimation(false)}
          >
            <h3
              className='text-center font-poppins font-semibold xs:text-[52px] text-[40px] text-white xs:leading-[66px] leading-[57px] w-full'>
              Contacts
            </h3>
          </CSSTransition>
          <hr className='w-[50px] border-0 border-b-4 border-secondary'/>
        </div>
        <div className='flex flex-col text-center items-center justify-center'>
          <p className={`${styles.paragraph} px-[3rem] md:px-[10rem]`}>
            For any questions and suggestions, you can write to me here.
            I am always open to interesting ideas and new acquaintances
          </p>
          <div className='flex flex-row justify-center mt-3 pb-5'>
            {contacts.map((contact, index) =>
              <CSSTransition
                in={startAnimation}
                timeout={10000}
                classNames={{enter: 'animate__animated animate__jackInTheBox animate__slow'}}
                onEntered={() => setStartAnimation(false)}
              >
                <a href={contact.link} target='_blank' key={contact.name} className='mx-4 cursor-pointer'>
                  {contact.icon}
                </a>
              </CSSTransition>
            )}
          </div>
        </div>
      </div>
      <AddTestimonialModal open={open} setOpen={setOpen} addTestimonial={addTestimonial}/>
    </div>
  )
};

export default Feedback;