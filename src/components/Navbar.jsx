import React, {useState} from 'react';
import {navLinks} from "../constants/navLinks.js";
import {Close, Menu} from "@mui/icons-material";
import {IconButton} from "@mui/material";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href='#hero' className='italic font-poppins font-normal cursor-pointer text-[20px] text-white '>Anton Kraev</a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        )}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <IconButton onClick={() => setToggle(prev => !prev)}>
          {toggle ?
            <Close sx={{color: 'white'}} className='w-[28px] h-[28px] cursor-pointer object-contain'/> :
            <Menu sx={{color: 'white'}} className='w-[28px] h-[28px] cursor-pointer object-contain'/>
          }
        </IconButton>
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) =>
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;