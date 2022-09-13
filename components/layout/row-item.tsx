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
  urlPath?: string;
}

const RowItem = ({ imageUrl, title, subTitle, backgroundColor, body, textColor, urlPath }: RowItemProps) => {
  const getRowItem = () => {
    return (
      <div 
        className={urlPath ? styles.rowItemContainer + " " + styles.link : styles.rowItemContainer} 
        style={{ 
          backgroundImage: imageUrl && `url("${imageUrl}")`,
          backgroundColor: backgroundColor && backgroundColor,
          color: textColor && textColor
        }}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        {subTitle && <h4 className={styles.subtitle}>{subTitle}</h4>}
        {imageUrl && <img src={imageUrl}/>}
        {body && <div className={styles.bodyContainer}>
          <p className={styles.body}>{body}</p>
        </div>}
      </div>
    );
  }

  return (
    urlPath ? <Link href={urlPath}>{getRowItem()}</Link> : getRowItem()
  );
}

export default RowItem;
