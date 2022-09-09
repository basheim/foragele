import React, { useState } from 'react';
import styles from '../../styles/Navigation.module.css';
import MobileDropdown from './mobile-dropdown';

export interface MobileItemProps { }

const MobileItem = ({ }: MobileItemProps) => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <MobileDropdown open={open} setClose={() => setOpen(false)}></MobileDropdown>
      <div className={styles.mobileItem} onClick={() => setOpen(true)}>
        <img src="/menu.svg" />
      </div>
    </React.Fragment>
  )
}

export default MobileItem;
