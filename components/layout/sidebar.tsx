import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Layout.module.css';

export interface SidebarProps { 
  imageUrl?: string;
  backgroundColor?: string;
  title: string;
  subTitle?: string;
  body: string;
  urlPath?: string;
}

const Sidebar = ({ imageUrl, title, subTitle, backgroundColor, urlPath, body }: SidebarProps) => {
  const getSidebarBody = () => {
    return (
    <div 
      className={urlPath ? styles.sidebarContainer + " " + styles.link : styles.sidebarContainer} 
      style={{ 
        backgroundColor: backgroundColor && backgroundColor 
      }}
    >
      <h2 className={styles.sidebarTitle}>{title}</h2>
      {subTitle && <h4 className={styles.sidebarSubtitle}>{subTitle}</h4>}
      {imageUrl && <img src={imageUrl}/>}
      <div className={styles.sidebarBodyContainer}>
        <p>{body}</p>
      </div>
    </div>
    );
  }

  return (
    urlPath ? <Link href={urlPath}>{getSidebarBody()}</Link> : getSidebarBody()
  );
}

export default Sidebar;
