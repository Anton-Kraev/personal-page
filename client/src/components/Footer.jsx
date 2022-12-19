import React from 'react';
import {Email, GitHub, Telegram} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className='w-full flex py-3 justify-center items-center'>
      <Telegram className='cursor-pointer' sx={{color: 'white', mx: '3px'}}/>
      <GitHub className='cursor-pointer' sx={{color: 'white', mx: '15px'}}/>
      <Email className='cursor-pointer' sx={{color: 'white', mx: '3px'}}/>
    </div>
  );
};

export default Footer;