import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface RowItemProps { 
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  subTitle?: string;
  body?: string;
  centerText?: boolean;
  urlPath?: string;
  miniText?: string;
}

const RowItem = ({ imageUrl, title, subTitle, backgroundColor, body, textColor, urlPath, miniText, centerText }: RowItemProps) => {
  const getRowItem = () => {
    return (
      <div 
        className={urlPath ? styles.rowItemContainer + " " + styles.link + " no-select" : styles.rowItemContainer} 
        style={{ 
          backgroundImage: imageUrl && `url("${imageUrl}")`,
          backgroundColor: backgroundColor && backgroundColor,
          color: textColor && textColor,
          textAlign: centerText ? "center" : undefined
        }}
      >
        {title && <h3 className={styles.title}>{title}</h3>}
        {subTitle && <h4 className={styles.subtitle}>{subTitle}</h4>}
        {imageUrl && <img src={imageUrl}/>}
        {body && <div className={styles.bodyContainer}>
          <p className={styles.body}>{body}</p>
        </div>}
        {miniText && <div className={styles.bodyContainer}>
          <p className={styles.miniText}>{miniText}</p>
        </div>}
      </div>
    );
  }

  return (
    urlPath ? <Link href={urlPath}>{getRowItem()}</Link> : getRowItem()
  );
}

export default RowItem;
