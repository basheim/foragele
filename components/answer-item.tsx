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
    return [
      `<b>Latin name</b>: ${answer.latin}`,
      `<b>Feature</b>: ${answer.keyFeatures}`,
      `<b>Edibility</b>: ${answer.edibility}`,
      `<b>Found near</b>: ${answer.foundNear}`,
      `<b>Poisonous look alike</b>: ${answer.poisonousLookAlike}`
    ];
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
    <li value={answer.english} className={styles.answerItem} onClick={open}>
      <div className={styles.centeringDiv}>
        <p>{answer.english}</p>
      </div>
      <Modal modalOpen={openAnswerModal} items={getHints()} title={answer.english} setClose={close} acceptAction={submit}></Modal>
    </li>
  )
}

export default AnswerItem;
