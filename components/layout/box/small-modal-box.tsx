import React, { useState } from 'react';
import styles from '../../../styles/Layout.module.css';
import Modal from '../../general/modal';

export interface SmallModalBoxProps { 
  text: string
  modalTitle: string
  modalItems: string[]
}

const SmallModalBox = ({ text, modalTitle, modalItems }: SmallModalBoxProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const open = () => {
    setOpenModal(true);
  };

  const close = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className={styles.smallBox} onClick={open}>
        {text}
      </div>
      <Modal modalOpen={openModal} title={modalTitle} items={modalItems} setClose={close}></Modal>
    </div>
    
  );
}

export default SmallModalBox;
