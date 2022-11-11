import React from 'react';
import styles from '../style';
import Contacts from "./Contacts";

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.flexCenter} ${styles.paddingY}`}>
    <div>
      <img className="h-80 w-80 rounded-full" src='https://img1.fonwall.ru/o/xa/mountains-sunset-snow-winter.jpeg?route=mid&amp;h=750' alt="photo" />
    </div>

    <Contacts />
  </section>
);


export default Hero;