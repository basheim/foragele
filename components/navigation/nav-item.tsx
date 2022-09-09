import Link from 'next/link';
import { Nav } from '../../lib/interfaces';
import styles from '../../styles/Navigation.module.css';

export interface NavItemProps {
    nav: Nav;
    key: string;
    customClass: string;
    additionalAction?: () => void;
}

const NavItem = ({ nav, key, customClass, additionalAction }: NavItemProps) => {

  return (
    <Link href={nav.path}>
        <div key={key} className={styles[customClass]} onClick={additionalAction ? additionalAction : undefined}>
            <h3>{nav.text}</h3>
        </div>
    </Link>
   
  )
}

export default NavItem;
