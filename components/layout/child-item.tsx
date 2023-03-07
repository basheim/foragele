import React from 'react';
import styles from '../../styles/Layout.module.css';
import Link from 'next/link';

export interface ChildItemProps { 
  backgroundColor?: string;
  urlPath?: string;
  textColor?: string;
  children: any;
}

const ChildItem = ({ children, backgroundColor, urlPath, textColor }: ChildItemProps) => {
  const getChildItem = () => {
    return (
      <div 
        className={urlPath ? styles.rowItemContainer + " " + styles.link + " no-select" : styles.rowItemContainer} 
        style={{ 
          backgroundColor: backgroundColor && backgroundColor
        }}
      >
        {children}
      </div>
    );
  }
  
  
  return (
    urlPath ? <Link href={urlPath}>{getChildItem()}</Link> : getChildItem()
  );
}

export default ChildItem;
