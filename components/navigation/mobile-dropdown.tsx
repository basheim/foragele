import { useState } from 'react';
import { navOptions } from '../../lib/navigation-constants';
import styles from '../../styles/Navigation.module.css';
import NavItem from './nav-item';

export interface MobileDropdownProps { 
  open: boolean;
  setClose: () => void;
}

const MobileDropdown = ({ open, setClose }: MobileDropdownProps) => {

  const getNavItems = () => {
    const navItems = [
      <div className={styles.mobileDropdownXContainer}>
        <div className={styles.mobileDropdownItem} onClick={setClose}>
          <img src="/x.svg" />
        </div>
      </div>
    ];
    for (const item of navOptions) {
      navItems.push(
        <NavItem key={item.text} nav={item} customClass={"mobileDropdownItem"} additionalAction={setClose}></NavItem>
      )
    }
    return navItems;
  };

  return (
    <div className={open ? styles.mobileDropdownContainerOpen : styles.mobileDropdownContainerClose}>
      <div className={styles.mobileListContainer}>
        {getNavItems()}
      </div>
    </div>
  )
}

export default MobileDropdown;
