import React from 'react';
import { navOptions } from '../../lib/navigation-constants';
import styles from '../../styles/Navigation.module.css';
import MobileItem from './mobile-item';
import NavItem from './nav-item';

export interface TopBarProps {}

const TopBar = ({ }: TopBarProps) => {

  const getNavItems = () => {
    const navItems = [
      <MobileItem key='mobile-icon'></MobileItem>,
      <div key='title' className={styles.textContainer}>
        <h3>Programming with Bean</h3>
      </div>
    ];
    for (const item of navOptions) {
      navItems.push(
        <NavItem key={`top-${item.text}`} nav={item} customClass={"topBarItem"}></NavItem>
      )
    }
    return navItems;
  };

  return (
    <div className={styles.barContainer}>
        {getNavItems()}
    </div>
  )
}

export default TopBar;
