import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface HorProps { 
  children: any;
  align?: string;
  justify?: string;
}

const Hor = ({ children, align, justify }: HorProps) => {
  return (
    <div 
      className={styles.horContainer}
      style={{ 
        alignItems: align && align,
        justifyContent: justify && justify
      }}
    >
      {children}
    </div>
  );
}

export default Hor;
