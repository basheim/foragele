import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { navOptions } from '../../lib/navigation-constants';
import styles from '../../styles/Navigation.module.css';
import MobileItem from './mobile-item';
import NavItem from './nav-item';

export interface TopBarProps {}

const TopBar = ({ }: TopBarProps) => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setItems(getNavItems());
  }, [Cookies.get('X-AUTH-TOKEN')]);

  const getNavItems = () => {
    const hasAuth = !!Cookies.get('X-AUTH-TOKEN');
    const navItems = [];
    for (const item of navOptions) {
      if (item.path !== "/" && ((hasAuth && item.authRequired) || (!hasAuth && item.unauthorizedOnly) || (!item.authRequired && !item.unauthorizedOnly))) {
        navItems.push(
          <NavItem key={`top-${item.text.replace(/ /g, '-')}`} nav={item} customClass={"topBarItem"}></NavItem>
        )
      }
    }
    return navItems;
  };

  return (
    <div className={styles.barContainer}>
      <MobileItem key='mobile-icon'></MobileItem>
      <Link href="/" key='title'>
        <div className={styles.textContainer}>
          <h3>Programming with Bean</h3>
        </div>
      </Link>
      <div className={styles.itemContainer}>
        {items}
      </div>
    </div>
  )
}

export default TopBar;
