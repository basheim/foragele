import styles from '../styles/Game.module.css';
import { useState, useEffect } from 'react';
import Answers, { Answer } from './answers';
import Timer from './timer';

export interface GamePageProps {
  minutes: number;
  guesses: number;
  correctId: string;
  possibleAnswers: Answer[];
  finished: (hasWon: boolean) => void;
}

const GamePage = ({ minutes, guesses, finished, correctId, possibleAnswers }: GamePageProps) => {
  const [guessesRemaining, setGuessesRemaining] = useState<number>(guesses);
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (update) {
      setUpdate(false);
      setGuessesRemaining(guessesRemaining - 1);
    }
    if (guessesRemaining === 0) {
      finished(false);
    }
  }, [guessesRemaining, update]);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.timerContainer}>
        <h3>{`Guesses: ${guessesRemaining}`}</h3>
        <Timer addedMinutes={minutes} timerDone={() => finished(false)}></Timer>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <Answers possibleAnswers={possibleAnswers} correctId={correctId} incorrectAnswer={() => setUpdate(true)} correctAnswer={() => finished(true)}></Answers>
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
