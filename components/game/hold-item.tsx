import { useState } from 'react';
import { Answer } from '../../lib/interfaces';
import styles from '../../styles/Answers.module.css';
import Modal from '../general/modal';


export interface HoldItemProps {
  useText?: boolean;
}

const HoldItem = ({ useText }: HoldItemProps) => {
  
  const text = "Nothing Found...";

  return (
    <li value={useText ? text : ""} className={styles.holdingItem}>
      <div className={styles.centeringDiv}>
        <p>{useText ? text : ""}</p>
      </div>
    </li>
  )
}

export default HoldItem;
