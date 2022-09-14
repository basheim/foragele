import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface VertProps { 
  children: any;
  align?: string;
  justify?: string;
  fullScreen?: boolean;
}

const Vert = ({ children, align, justify, fullScreen }: VertProps) => {
  return (
    <div 
      className={styles.vertContainer}
      style={{ 
        alignItems: align && align,
        justifyContent: justify && justify,
        minHeight: fullScreen ? "100vh" : "auto"
      }}
    >
      {children}
    </div>
  );
}

export default Vert;
