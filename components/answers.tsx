import { useState, useEffect } from 'react';
import useComponentVisible from '../lib/use-component-visibile';
import styles from '../styles/Answers.module.css';

export interface Answer {
  id: string;
  name: string;
}

export interface AnswersProps {
  possibleAnswers: Answer[];
  correctId: string;
  incorrectAnswer: () => void;
  correctAnswer: () => void;
}

const Answers = ({ possibleAnswers, correctId, incorrectAnswer, correctAnswer }: AnswersProps) => {
  const [filter, setFilter] = useState<string>("");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  
  const getAnswerList = () => {
    const items = [];
    for (const answer of possibleAnswers.sort((a, b) => a.name.toLowerCase().charAt(0).localeCompare(b.name.toLowerCase().charAt(0)))) {
      if (answer.name.toLowerCase().includes(filter.toLowerCase())) {
        items.push(
          <li value={answer.name} key={`${answer.id}-${answer.name}`} onClick={() => updateSelectedUser(answer)}>
            <div className={styles.centeringDiv}>
              <p>{answer.name}</p>
            </div>
          </li>
        );
      }
    }
    return items;
  };

  const [answerList, setAnwserList] = useState<JSX.Element[]>(getAnswerList());

  useEffect(() => {
    setAnwserList(getAnswerList());
  }, [filter]);

  const updateSelectedUser = (answer: Answer) => {
    if (answer.id === correctId) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
    setFilter("");
    setIsComponentVisible(false);
  };

  return (
    <div ref={ref} className={`${styles.container} no-select`}>
      {!isComponentVisible && <input type="button" className={`${styles.input} no-select`} value={ "Select Name..."} onClick={() => setIsComponentVisible(!isComponentVisible)}/>}
      {isComponentVisible && <input className={`${styles.filter} no-select`} type="text" value={filter} onChange={(e) => setFilter(e.currentTarget.value)} placeholder="Search..." />}
      {isComponentVisible && <div className={`${styles.listContainer} no-select`}>
        <ul className={`${styles.list} no-select`}>
          {answerList}
        </ul>
      </div>}
    </div>
  )
}

export default Answers;
