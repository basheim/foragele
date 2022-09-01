import React from 'react';
import styles from '../styles/Modal.module.css';

export interface ModalProps {
  modalOpen: boolean;
  setClose: () => void;
  title: string;
  items: (string | undefined)[];
  acceptAction?: () => void;
}

const Modal = ({ modalOpen, title, items, acceptAction, setClose}: ModalProps) => {

  const getList = () => {
    const htmlList = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i] !== undefined) {
        htmlList.push(
          <li value={items[i]} key={i}>{items[i]}</li>
        );
      }
    }
    return htmlList;
  };

  const click = (e: any) => {
    e.stopPropagation();
    acceptAction && acceptAction();
  }

  const close = (e: any) => {
    e.stopPropagation();
    setClose();
  };
  
  return (
    <React.Fragment>
      {modalOpen && 
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              {items &&
                <ul>
                  {getList()}
                </ul>
              }
            </div>
            <div className={styles.buttonDiv}>
              {acceptAction && <button className={`${styles.button} no-select`} onClick={click}>Guess</button>}
              <button className={`${styles.button} no-select`} onClick={close}>Close</button>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default Modal;
