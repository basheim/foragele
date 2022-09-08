import { navOptions } from '../../lib/navigation-constants';
import styles from '../../styles/Navigation.module.css';
import NavItem from './nav-item';

export interface TopBarProps {}

const TopBar = ({ }: TopBarProps) => {

  const getNavItems = () => {
    const navItems = [
      <div className={styles.textContainer}>
        <h3>Programming with Bean</h3>
      </div>
    ];
    for (const item of navOptions) {
      navItems.push(
        <NavItem nav={item}></NavItem>
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
