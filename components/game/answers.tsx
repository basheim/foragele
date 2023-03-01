import { useState, useEffect } from 'react';
import { Answer } from '../../lib/interfaces';
import styles from '../../styles/Answers.module.css';
import AnswerItem from './answer-item';
import HoldItem from './hold-item';

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
    for (const answer of possibleAnswers.sort((a, b) => a.english.toLowerCase().charAt(0).localeCompare(b.english.toLowerCase().charAt(0)))) {
      if (answer.english.toLowerCase().includes(filter.toLowerCase())) {
        items.push(
          <AnswerItem key={`${answer.id}-${answer.english}`} answer={answer} submitted={() => submit(answer.id === correctId ? correctAnswer : incorrectAnswer)}/>
        );
      }
    }
    if (items.length === 0) {
      items.push(<HoldItem useText/>);
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
