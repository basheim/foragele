import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Nav } from '../../lib/interfaces';
import styles from '../../styles/Navigation.module.css';

export interface NavItemProps {
    nav: Nav;
}

const NavItem = ({ nav }: NavItemProps) => {

  return (
    <Link href={nav.path}>
        <div className={styles.itemContainer}>
            <h3>{nav.text}</h3>
        </div>
    </Link>
   
  )
}

export default NavItem;
