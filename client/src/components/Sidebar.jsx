import React, {useContext, useState} from 'react';
import {study} from "../constants/study.js";
import {
  IconButton,
  Step,
  stepClasses,
  StepConnector,
  stepConnectorClasses,
  StepContent,
  StepLabel,
  Stepper,
  styled
} from "@mui/material";
import {Close, Feed, Menu} from "@mui/icons-material";
import {navLinks} from "../constants/navLinks.js";
import {PagesContext} from "../PagesProvider.jsx";

const QontoConnector = styled(StepConnector)(({theme}) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#00f6ff',
    marginInlineEnd: 16,
    borderInlineStartWidth: 3,
    height: 40
  },
}));

const QontoStepIconRoot = styled('div')(({theme, ownerState}) => ({
  color: '#00f6ff',
  display: 'flex',
  alignItems: 'center',
  '& .QontoStepIcon-circle': {
    marginInlineEnd: 6,
    width: 10,
    height: 10,
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
//TODO: мб использовать иконку локации
const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const {currentPage, setCurrentPage} = useContext(PagesContext);

  return (
    <div
      className={`pl-1 md:pl-2 fixed z-10 ${toggle ? 'rounded-3xl rounded-br-none rounded-tr-none backdrop-brightness-[.3]' : ''} text-white top-0 right-0 h-[100vh] `}>
      <div className='flex justify-center md:justify-end'>
        <IconButton onClick={() => setToggle(prev => !prev)}>
          {toggle ?
            <Close sx={{color: 'white'}} className='w-[28px] h-[28px] cursor-pointer object-contain'/> :
            <Menu sx={{color: 'white'}} className='w-[28px] h-[28px] cursor-pointer object-contain'/>
          }
        </IconButton>
      </div>
      {toggle &&
        <>
          <div className={`hidden md:flex`}>
            <Stepper orientation='vertical' connector={<QontoConnector/>} className='flex flex-row items-end'>
              {navLinks.map((nav, index) =>
                <Step key={nav.id}>
                  <StepLabel classes={{
                    labelContainer: 'transition ease-in-out delay-50 hover:-translate-x-1',
                    iconContainer: 'order-2'
                  }} StepIconComponent={QontoStepIcon}>
                    <a
                      className={`cursor-pointer italic ${currentPage === nav.id ? 'text-secondary' : 'text-white'} mr-2`}
                      onClick={() => setCurrentPage(nav.id)}
                      href={`#${nav.id}`}>{nav.title}</a>
                  </StepLabel>
                </Step>
              )}
            </Stepper>
          </div>
          <ul className='md:hidden list-none flex flex-col justify-end items-center flex-1 mx-2'>
            {navLinks.map((nav, index) =>
              <li
                key={nav.id}
                className='transition ease-in-out delay-50 hover:-translate-x-1'
              >
                <a onClick={() => setCurrentPage(nav.id)}
                   className={`cursor-pointer italic ${currentPage === nav.id ? 'text-secondary' : 'text-white'} mt-1`}
                   href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )}
          </ul>
        </>
      }
    </div>
  );
};

export default Sidebar;