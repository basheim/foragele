import React from 'react';
import { ModalData, ModalLinkData } from '../../../lib/interfaces';
import styles from '../../../styles/Layout.module.css';
import SmallLinkBox from './small-link-box';
import SmallModalBox from './small-modal-box';

export interface BoxContainerProps { 
  modalSelectors ?: ModalData[]
  modalLinkSelectors ?: ModalLinkData[]
}

const BoxContainer = ({ modalSelectors, modalLinkSelectors }: BoxContainerProps) => {

  const getBoxes = () => {
    const boxes = [];
    if (modalSelectors && modalSelectors.length > 0) {
      for (let modalSelector of modalSelectors) {
        boxes.push(<SmallModalBox text={modalSelector.text} modalItems={modalSelector.modalItems} modalTitle={modalSelector.modalTitle}/>);
      }
    }

    if (modalLinkSelectors && modalLinkSelectors.length > 0) {
      for (let modalSelector of modalLinkSelectors) {
        boxes.push(<SmallLinkBox text={modalSelector.text} link={modalSelector.link}/>);
      }
    } 
    
    return boxes;
  };

  return (
    <div className={styles.boxContainer} >
      {getBoxes()}
    </div>
  );
}

export default BoxContainer;
