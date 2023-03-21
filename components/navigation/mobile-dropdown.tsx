import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { navOptions } from '../../lib/navigation-constants';
import styles from '../../styles/Navigation.module.css';
import NavItem from './nav-item';

export interface MobileDropdownProps { 
  open: boolean;
  setClose: () => void;
}

const MobileDropdown = ({ open, setClose }: MobileDropdownProps) => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setItems(getNavItems());
  }, [Cookies.get('X-AUTH-TOKEN')]);

  useEffect((): any => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const getNavItems = () => {
    const hasAuth = !!Cookies.get('X-AUTH-TOKEN');
    let light = true;
    const navItems = [
      <div key='mobile-x' className={styles.mobileDropdownXContainer}>
        <div className={`${styles.mobileDropdownItem2} no-select`} onClick={setClose}>
          <img src="/x.svg" />
        </div>
      </div>
    ];
    for (const item of navOptions) {
      if ((hasAuth && item.authRequired) || (!hasAuth && item.unauthorizedOnly) || (!item.authRequired && !item.unauthorizedOnly)) {
        navItems.push(
          <NavItem key={`mobile-${item.text.replace(/ /g, '-')}`} nav={item} customClass={light ? "mobileDropdownItem1" : "mobileDropdownItem2"} additionalAction={setClose}></NavItem>
        )
        light = !light;
      }
    }
    return navItems;
  };

  return (
    <div className={open ? styles.mobileDropdownContainerOpen : styles.mobileDropdownContainerClose}>
      <div className={styles.mobileListContainer}>
        {items}
      </div>
    </div>
  )
}

export default MobileDropdown;
