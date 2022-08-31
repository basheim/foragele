import { useState } from 'react';
import { Answer } from '../lib/interfaces';
import styles from '../styles/Answers.module.css';
import Modal from './modal';


export interface AnswerItemProps {
  answer: Answer;
  submitted: () => void;
  key: string;
}

const AnswerItem = ({ answer, submitted }: AnswerItemProps) => {
  const [openAnswerModal, setOpenAnswerModal] = useState<boolean>(false);

  const getHints = (): (string | undefined)[] => {
    return [answer.region, answer.edibility, answer.mostNotableFeature];
  }

  const open = () => {
    setOpenAnswerModal(true)
  };

  const close = () => {
    setOpenAnswerModal(false);
  };

  const submit = () => {
    close();
    submitted();
  };

  return (
    <li value={answer.name} className={styles.answerItem} onClick={open}>
      <div className={styles.centeringDiv}>
        <p>{answer.name}</p>
      </div>
      <Modal modalOpen={openAnswerModal} items={getHints()} title={answer.name} setClose={close} acceptAction={submit}></Modal>
    </li>
  )
}

export default AnswerItem;
