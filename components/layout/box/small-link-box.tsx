import React, { useState } from 'react';
import styles from '../../../styles/Layout.module.css';
import Link from 'next/link';

export interface SmallLinkBoxProps { 
  text: string
  link: string
}

const SmallLinkBox = ({ text, link }: SmallLinkBoxProps) => {
  return (
    <div>
      <Link href={link}>
        <div className={styles.smallBox}>
          {text}
        </div>
      </Link>
    </div>
    
  );
}

export default SmallLinkBox;
