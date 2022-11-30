import React from 'react';
import styles from '../style';

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.flexCenter} ${styles.paddingY}`}>
    <img className="h-100 w-full" src='../src/assets/photo.jpg' alt="photo" />
  </section>
);


export default Hero;