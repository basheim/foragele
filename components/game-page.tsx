import styles from '../styles/Game.module.css';
import { useState } from 'react';
import Answers, { Answer } from './answers';
import Timer from './timer';

export interface GamePageProps {
  minutes: number;
  guesses: number;
  correctId: string;
  finished: (hasWon: boolean) => void;
}

const GamePage = ({ minutes, guesses, finished, correctId }: GamePageProps) => {
  const [guessesRemaining, setGuessesRemaining] = useState<number>(guesses)

  const testAnswers: Answer[] = [
    {
      name: 'test1',
      id: '1'
    },
    {
      name: 'test2',
      id: '2'
    },
    {
      name: 'test3',
      id: '3'
    },
    {
      name: 'test4',
      id: '4'
    },
    {
      name: 'test5',
      id: '5'
    }
  ];

  const checkAnswer = (answer: Answer) => {
    if (answer.id === correctId) {
      finished(true);
    } else {
      setGuessesRemaining(guessesRemaining - 1);
      if (guessesRemaining === 0) {
        finished(false);
      }
    }
  }

  const timerDone = () => {
    finished(false);
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.timerContainer}>
        <h3>{`Guesses Remaining: ${guessesRemaining}`}</h3>
        <Timer addedMinutes={minutes} timerDone={timerDone}></Timer>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <Answers possibleAnswers={testAnswers} checkAnswer={checkAnswer}></Answers>
        </div>
        <div className={styles.halfScreen}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG"></img>
        </div>
      </div>
      <div className={styles.fullScreen}>
          <h3 className={styles.subTitle}>Hints</h3>
          <ul className={styles.table}>
            <li className={styles.tableItem}>test</li>
          </ul>
        </div>
    </div>
  )
}

export default GamePage;
