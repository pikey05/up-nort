import React from 'react';

import CenterContent from '../UI/CenterContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './Contact.module.css';

const Contact = () => {
  const largeScreen = useMediaQuery('(min-width:600px)');
  const rentalLink = 'https://www.stepawayvacationrentals.com/properties/up-nort-retreat'
  let styleProps = {
    minWidth: '40rem',
    paddingLeft: '20px',
    paddingRight: '20px'
  };

  if (!largeScreen) {
    styleProps = {
      minWidth: '22rem',
      paddingLeft: '20px',
      paddingRight: '20px'
    };
  }

  return (
    <CenterContent sxProps={styleProps}>
      {largeScreen ? <h2>CONTACT</h2> : <h3>CONTACT</h3>}
      <div>
        <div className={styles.contactItem}>
          <h4>Email:</h4>
        </div>
        <div className={styles.contactItem}>
          <a href="mailto:info@stepawayvacationrentals.com">info@stepawayvacationrentals.com</a>
        </div>
      </div>
      <div>
        <div className={styles.contactItem}>
          <h4>Telephone:</h4>
        </div>
        <div className={styles.contactItem}>
          <a href="tel:715-891-7286">(715) 891-7286</a>
        </div>
      </div>
      <div className={styles.lastItem}>
        <div className={styles.contactItem}>
          <h4>Rental Link:</h4>
        </div>
        <div className={styles.contactItem}>
          <a href={rentalLink} target="_blank">Click here</a>
        </div>
      </div>
      <div className={styles.spacer} />
    </CenterContent>
  );
};

export default Contact;

//style={{ borderBottom: '2px solid' }}
