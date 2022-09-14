import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface ChildItemProps { 
  backgroundColor?: string;
  textColor?: string;
  children: any;
}

const ChildItem = ({ children, backgroundColor, textColor }: ChildItemProps) => {
  return (
    <div 
      className={styles.childContainer} 
      style={{ 
        backgroundColor: backgroundColor && backgroundColor,
        color: textColor && textColor
      }}
    >
      {children}
    </div>
  );
}

export default ChildItem;
