import {Email, GitHub, Telegram} from "@mui/icons-material";

//TODO: ссылки
export const contacts = [
  {name: 'telegram', link: 'https://t.me/A123K666', icon: <Telegram className='hover:border-2 hover:border-white hover:rounded-full p-1 hover:shadow-md hover:shadow-white' sx={{width: '40px', height: '40px', color: 'white'}}/>},
  {name: 'gmail', link: 'mailto:antonkraeww@gmail.com', icon: <Email className='hover:border-2 hover:border-white hover:rounded-full p-1 hover:shadow-md hover:shadow-white' sx={{width: '40px', height: '40px', color: 'white'}}/>},
  {name: 'github', link: 'https://github.com/Anton-Kraev', icon: <GitHub className='hover:border-2 hover:border-white hover:rounded-full p-1 hover:shadow-md hover:shadow-white' sx={{width: '40px', height: '40px', color: 'white'}}/>},
]