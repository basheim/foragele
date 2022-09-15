import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface HtmlItemProps { 
  backgroundColor?: string;
  textColor?: string;
  html: any;
}

const HtmlItem = ({ html, backgroundColor, textColor }: HtmlItemProps) => {
  return (
    <div 
      className={styles.childContainer} 
      style={{ 
        backgroundColor: backgroundColor && backgroundColor,
        color: textColor && textColor
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}

export default HtmlItem;
