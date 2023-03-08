import React, { useEffect } from 'react';
import styles from '../../styles/Modal.module.css';
import homeStyles from '../../styles/Home.module.css';
import Hor from '../layout/hor';
import Vert from '../layout/vert';

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
          <span className={styles.listItem} key={i} dangerouslySetInnerHTML={{ __html: items[i] || "" }}></span>
        );
      }
    }
    return htmlList;
  };

  useEffect((): any => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);


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
            <Vert>
              <h2 className={styles.title}>{title}</h2>
              {items &&
                <div className={styles.listContainer}>
                  {getList()}
                </div>
              }
              <Hor>
                {acceptAction && <button className={`${homeStyles.button} no-select ${styles.buttonSpacing}`} onClick={click}>Guess</button>}
                <button className={`${homeStyles.button} no-select ${styles.buttonSpacing}`} onClick={close}>Close</button>
              </Hor>
            </Vert>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default Modal;
