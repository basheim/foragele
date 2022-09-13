import React from 'react';
import styles from '../../styles/Layout.module.css';
import Vert from './vert';

export interface SidebarProps { 
  backgroundColor?: string;
  children: any;
}

const Sidebar = ({ backgroundColor, children }: SidebarProps) => {
  return (
    <div 
      className={styles.sidebarContainer} 
      style={{ 
        backgroundColor: backgroundColor && backgroundColor
      }}
    >
      <Vert>
        {children}
      </Vert>
    </div>
  );
}

export default Sidebar;
