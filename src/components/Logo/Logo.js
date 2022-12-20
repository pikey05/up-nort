import React from 'react';

import Card from '../../components/UI/Card';
import logoImg from '../../assets/logo-nobackground-200.png';
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Card className={styles.logo}>
      <img src={logoImg} alt="Up Nort' Retreat Logo" />
    </Card>
  );
};

export default Logo;
