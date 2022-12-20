import React, {useContext, useState} from 'react';
import {navLinks} from "../../constants/navLinks.js";
import {Close, Menu} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {PagesContext} from "../../providers/PagesProvider.jsx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const {currentPage, setCurrentPage} = useContext(PagesContext);

  return (
    <nav className='w-full flex py-3 items-center navbar'>
      <ul className='list-none sm:flex hidden justify-evenly items-center flex-1'>
        {navLinks.map((nav, index) =>
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] text-dimWhite`}
          >
            <a
              href={`#${nav.id}`}
              className={` ${currentPage === nav.id && 'text-white underline decoration-secondary decoration-4 underline-offset-8 text-[24px]'}`}
              onClick={() => setCurrentPage(nav.id)}
            >
              {nav.title}
            </a>
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
          className={`${toggle ? 'flex' : 'hidden'} py-2 bg-black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) =>
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-1'}`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => setCurrentPage(nav.id)}
                  className={`${currentPage === nav.id ? 'text-secondary' : 'text-white'}`}
                >
                  {nav.title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;