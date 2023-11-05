import styles from '../styles/AddLink.module.css';
import React from 'react';
import link from '../assets/images/icons/link.png';

const AddLink = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img src={link} alt='링크 이미지' className={styles.img} />
          <input
            type='text'
            placeholder='링크를 추가해 보세요'
            className={styles.input}
          />
        </div>
        <button type='button' className={styles.button}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default AddLink;
