import React from 'react';
import styles from '../style.js';

const Topic = ({heading, paragraph, icon}) => {
  return (
    <div className={`feature-card ${styles.padding} mt-5 relative rounded-xl border-2 border-dotted border-secondary hover:border-solid rounded-tr-3xl`}>
      {icon}
      <h2 className={`${styles.heading2}`}>
        {heading}
      </h2>
      <p className={`${styles.paragraph}`}>
        {paragraph}
      </p>
    </div>
  );
};

export default Topic;