import React, { useState } from 'react';
import { Result } from '../lib/enums';
import styles from '../styles/Modal.module.css';

export interface ModalProps {
  modalOpen: boolean;
  setClose: () => void;
  title: string;
  items: string[];
  acceptAction?: () => void;
  result?: Result;
}

const Modal = ({ modalOpen, title, items, acceptAction, setClose, result}: ModalProps) => {
  const [showResult, setShowResult] = useState<boolean>(false);

  const getList = () => {
    const htmlList = [];
    for (let i = 0; i < items.length; i++) {
      htmlList.push(
      <li value={items[i]} key={i}>{items[i]}</li>
      );
    }
    return htmlList;
  };

  const click = (e: any) => {
    e.stopPropagation();
    setShowResult(true);
  }

  const accept = () => {
    acceptAction && acceptAction();
    setShowResult(false);
  };

  const close = (e: any) => {
    e.stopPropagation();
    setClose();
  };
  
  return (
    <React.Fragment>
      {modalOpen && 
        <div className={styles.modalContainer}>
          <div className={`${styles.modal} ${(showResult && result === Result.Correct) && styles.correct} ${(showResult && result === Result.Incorrect) && styles.incorrect}`} onAnimationEnd={accept}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              {items &&
                <ul>
                  {getList()}
                </ul>
              }
            </div>
            <div className={styles.buttonDiv}>
              {acceptAction && <button className={styles.button} onClick={click}>Guess</button>}
              <button className={styles.button} onClick={close}>Close</button>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default Modal;
