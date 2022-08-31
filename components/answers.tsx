import { useState, useEffect } from 'react';
import { Answer } from '../lib/interfaces';
import styles from '../styles/Answers.module.css';
import AnswerItem from './answer-item';

export interface AnswersProps {
  possibleAnswers: Answer[];
  correctId: string;
  incorrectAnswer: () => void;
  correctAnswer: () => void;
}

const Answers = ({ possibleAnswers, correctId, incorrectAnswer, correctAnswer }: AnswersProps) => {
  const [filter, setFilter] = useState<string>("");

  const getAnswerList = () => {
    const items = [];
    for (const answer of possibleAnswers.sort((a, b) => a.name.toLowerCase().charAt(0).localeCompare(b.name.toLowerCase().charAt(0)))) {
      if (answer.name.toLowerCase().includes(filter.toLowerCase())) {
        items.push(
          <AnswerItem key={`${answer.id}-${answer.name}`} answer={answer} submitted={() => submit(answer.id === correctId ? correctAnswer : incorrectAnswer)}></AnswerItem>
        );
      }
    }
    return items;
  };

  const close = () => {
    setFilter("");
  };

  const submit = (action: () => void) => {
    close();
    action();
  };

  const [answerList, setAnwserList] = useState<JSX.Element[]>(getAnswerList());

  useEffect(() => {
    setAnwserList(getAnswerList());
  }, [filter]);

  return (
    <div className={styles.container}>
      <input className={`${styles.filter} no-select`} type="text" value={filter} onChange={(e) => setFilter(e.currentTarget.value)} placeholder="Search..." />
      <div className={styles.listContainer}>
        <ul className={`${styles.list} no-select`}>
          {answerList}
        </ul>
      </div>
    </div>
  )
}

export default Answers;
