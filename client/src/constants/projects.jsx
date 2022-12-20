import {BurstMode, Psychology, SmartToy} from "@mui/icons-material";
import React from 'react';

export const projects = [
  {
    icon: <SmartToy sx={{color: '#00f6ff', height: '200px', width: '200px'}}/>,
    description: 'Bot for group',
    link: 'https://github.com/Anton-Kraev/vk-bot-bmstu',
  },
  {
    icon: <BurstMode sx={{color: '#00f6ff', height: '200px', width: '200px'}}/>,
    description: 'Streamlit app for conditional image generation',
    link: 'https://github.com/Anton-Kraev/image-generation/tree/implementation',
  },
  {
    icon: <Psychology sx={{color: '#00f6ff', height: '200px', width: '200px'}}/>,
    description: 'Participation in the development of a vk-app as a semester practice',
    link: 'https://vk.com/app7794698',
  },
]