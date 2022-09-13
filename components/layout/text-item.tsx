import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface TextItemProps { 
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  title: string;
  subTitle?: string;
  body: string;
}

const TextItem = ({ imageUrl, title, subTitle, backgroundColor, body, textColor }: TextItemProps) => {
  return (
    <div 
      className={styles.rowItemContainer} 
      style={{ 
        backgroundColor: backgroundColor && backgroundColor,
        color: textColor && textColor
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      {subTitle && <h5 className={styles.subtitle}>{subTitle}</h5>}
      {imageUrl && <img src={imageUrl}/>}
      <div className={styles.bodyContainer}>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
}

export default TextItem;
