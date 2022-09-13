import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface BannorProps { 
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  title: string;
  subTitle: string;
  urlPath?: string;
}

const Bannor = ({ imageUrl, title, subTitle, backgroundColor, urlPath, textColor }: BannorProps) => {
  const getBannorBody = () => {
    return (
    <div 
      className={urlPath ? styles.bannorContainer + " " + styles.link : styles.bannorContainer} 
      style={{ 
        backgroundImage: imageUrl && `url("${imageUrl}")`,
        backgroundColor: backgroundColor && backgroundColor,
        color: textColor && textColor
      }}
    >
      <h2 className={styles.bannorTitle}>{title}</h2>
      <h4 className={styles.bannorSubTitle}>{subTitle}</h4>
    </div>
    );
  }

  return (
    urlPath ? <Link href={urlPath}>{getBannorBody()}</Link> : getBannorBody()
  );
}

export default Bannor;
