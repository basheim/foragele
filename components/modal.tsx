import React from 'react';
import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export interface ModalProps {
  modalOpen: boolean;
  setClose: () => void;
  title: string;
  bodyHtml: string;
  acceptAction?: () => void;
}

const Modal = ({ modalOpen, title, bodyHtml, acceptAction, setClose}: ModalProps) => {
  return (
    <React.Fragment>
      {modalOpen && 
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <div  className={styles.body} dangerouslySetInnerHTML={{ __html: bodyHtml}}></div>
            </div>
            <div className={styles.buttonDiv}>
              {acceptAction && <button className={styles.button} onClick={acceptAction}>Accept</button>}
              <button className={styles.button} onClick={setClose}>Close</button>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default Modal;
