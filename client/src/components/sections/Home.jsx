import React, {useEffect, useState} from 'react';
import styles from '../../style.js';
import {contacts} from "../../constants/contacts.jsx";
import {CSSTransition} from "react-transition-group";
import {ArrowDownward} from "@mui/icons-material";

const Home = ({current}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    if (current === 'home') {
      setStartAnimation(true);
    }
  }, [current])

  return (
    <div
      className='flex justify-center items-center h-[100vh] overflow-hidden brightness-75 sm:brightness-100 bg-center bg-cover bg-[url(assets/photo.jpg)] sm:bg-none sm:bg-primary'>
      <div className='sm:container flex flex-col justify-between h-[80%]'>
        <div className='flex flex-row justify-between'>
          <div
            className='sm:py-8 hidden sm:flex whitespace-nowrap flex-col text-center text-start w-full overflow-visible'>
            <CSSTransition
              in={startAnimation}
              timeout={2000}
              classNames={{enter: 'animate__animated animate__fadeIn animate__slow'}}
              onEntered={() => setStartAnimation(false)}
            >
              <h1 className={`sm:indent-16 ${styles.heading} text-dimWhite`}>
                Hi, my name is
              </h1>
            </CSSTransition>
            <CSSTransition
              in={startAnimation}
              timeout={2000}
              classNames={{enter: 'animate__animated animate__lightSpeedInLeft animate__slow'}}
              onEntered={() => setStartAnimation(false)}
            >
              <h1 className={`${styles.heading} text-white font-thin italic`}>
                Anton Kraev
              </h1>
            </CSSTransition>
            <CSSTransition
              in={startAnimation}
              timeout={2000}
              classNames={{enter: 'animate__animated animate__fadeIn animate__slow'}}
              onEntered={() => setStartAnimation(false)}
            >
              <h1 className={`sm:indent-16 ${styles.heading} text-dimWhite`}>
                I'm the aspiring
              </h1>
            </CSSTransition>
            <CSSTransition
              in={startAnimation}
              timeout={2000}
              classNames={{enter: 'animate__animated animate__lightSpeedInLeft animate__slow'}}
              onEntered={() => setStartAnimation(false)}
            >
              <h1 className={`${styles.heading} text-white font-thin italic`}>
                Software engineer
              </h1>
            </CSSTransition>
          </div>
          <CSSTransition
            in={startAnimation}
            timeout={2000}
            classNames={{enter: 'animate__animated animate__bounceIn animate__slow'}}
            onEntered={() => setStartAnimation(false)}
          >
            <div
              className='sm:py-8 flex sm:hidden whitespace-nowrap flex-col text-center text-start w-full overflow-visible'>
              <h1 className={`${styles.heading} text-white`}>
                Hi, my name is Anton Kraev
              </h1>
              <h1 className={`${styles.heading} text-white`}>
                I'm the aspiring Software engineer
              </h1>
            </div>
          </CSSTransition>
          <div className='self-center brightness-75 hidden sm:block ml-5 h-[300px] w-[300px] md:h-[400px] md:w-[400px]'>
            <img src='assets/photo.jpg' alt="photo"/>
          </div>
        </div>
        <div className='self-end sm:w-full flex flex-row items-end justify-between sm:my-2 md:my-4'>
          <div className='flex flex-row justify-center'>
            {contacts.map((contact, index) =>
              <CSSTransition
                in={startAnimation}
                timeout={2000}
                classNames={{enter: 'animate__animated animate__jackInTheBox animate__slow'}}
                onEntered={() => setStartAnimation(false)}
              >
                <a href={contact.link} target='_blank' key={contact.name} className='mx-1 sm:mx-5 cursor-pointer'>
                  {contact.icon}
                </a>
              </CSSTransition>
            )}
          </div>
          <CSSTransition
            in={startAnimation}
            timeout={2000}
            classNames={{enter: 'animate__animated animate__hinge animate__slow'}}
            onEntered={() => setStartAnimation(false)}
          >
            <div
              className='text-end hidden sm:block lg:text-[16px] font-poppins font-semibold text-secondary'>
              <span>Scroll down</span>
              <ArrowDownward sx={{color: '#00f6ff'}}/>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  )
};


export default Home;