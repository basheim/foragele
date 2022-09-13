import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface VertProps { 
  children: any;
  align?: string;
  justify?: string;
}

const Vert = ({ children, align, justify }: VertProps) => {
  return (
    <div 
      className={styles.vertContainer}
      style={{ 
        alignItems: align && align,
        justifyContent: justify && justify
      }}
    >
      {children}
    </div>
  );
}

export default Vert;
