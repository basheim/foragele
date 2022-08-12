import styles from '../styles/Game.module.css';
import { useState, useEffect } from 'react';
import Answers from './answers';
import Timer from './timer';
import Modal from './modal';
import { Answer } from '../lib/interfaces';

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
  const [openHintModal, setOpenHintModal] = useState<boolean>(false);

  const testList = [
    "testing 1",
    "testing 2"
  ];

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
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG"></img>
        </div>
        <div className={styles.halfScreen}>
          <Answers possibleAnswers={possibleAnswers} correctId={correctId} incorrectAnswer={() => setUpdate(true)} correctAnswer={() => finished(true)}></Answers>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <button className={styles.button} onClick={() => setOpenHintModal(true)}>hints</button>
      </div>
      <Modal modalOpen={openHintModal} setClose={() => setOpenHintModal(false)} title="Hints" items={testList}></Modal>
    </div>
  )
}

export default GamePage;
