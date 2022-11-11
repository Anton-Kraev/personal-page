import React from 'react';
import styles from "../style.js";

const Contacts = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='bg-black-gradient-2 rounded-tr-lg'>
        <p className={`text-gradient ${styles.paragraph}`}>тут телеграм</p>
      </div>
      <div className='bg-black-gradient-2 rounded-tr-lg'>
        <p className={`text-gradient ${styles.paragraph}`}>тут почта</p>
      </div>
      <div className='bg-black-gradient-2 rounded-tr-lg'>
        <p className={`text-gradient ${styles.paragraph}`}>тут гитхаб</p>
      </div>
    </div>
  );
};

export default Contacts;