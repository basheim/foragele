import Link from 'next/link';
import { Nav } from '../../lib/interfaces';
import styles from '../../styles/Navigation.module.css';

export interface NavItemProps {
    nav: Nav;
    customClass: string;
    additionalAction?: () => void;
}

const NavItem = ({ nav, customClass, additionalAction }: NavItemProps) => {
  return (
    <Link href={nav.path}>
      <div className={`${styles[customClass]} no-select`} onClick={additionalAction ? additionalAction : undefined}>
        <h3>{nav.text}</h3>
      </div>
    </Link>
   
  )
}

export default NavItem;
