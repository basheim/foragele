import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {

  return (
    <div className={styles.footerContainer}>
      <p>Created by Brandon Asheim</p>
      <p>Made with ♡ in Seattle</p>
    </div>
  );
}

export default Footer;
