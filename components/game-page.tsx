import styles from '../styles/Game.module.css';
import { useState, useEffect } from 'react';
import Answers from './answers';
import Timer from './timer';
import Modal from './modal';
import { Answer } from '../lib/interfaces';
import Guesses from './guesses';
import { LossReason } from '../lib/enums';

export interface GamePageProps {
  minutes: number;
  guesses: number;
  correctId: string;
  possibleAnswers: Answer[];
  finished: (hasWon: boolean, timeRemaining: number, guessesRemaining: number, lossReason: LossReason | undefined) => void;
}

const GamePage = ({ minutes, guesses, finished, correctId, possibleAnswers }: GamePageProps) => {
  const [guessesRemaining, setGuessesRemaining] = useState<number>(guesses);
  const [update, setUpdate] = useState<boolean>(false);
  const [openHintModal, setOpenHintModal] = useState<boolean>(false);
  const [hints, setHints] = useState<string[]>([]);

  const getCorrectAnswer = () => {
    return possibleAnswers.find((answer) => answer.id === correctId);
  }

  const getImageUrl = (): string => {
    const correctAnswer = getCorrectAnswer();
    return correctAnswer ? correctAnswer.imageUrl : "error.png";
  }

  useEffect(() => {
    if (update) {
      const correctAnswer = getCorrectAnswer();
      if (correctAnswer) {
        if (guessesRemaining === 4) {
          hints.push(correctAnswer.region);
          setHints(hints);
        } else if (guessesRemaining === 3) {
          hints.push(correctAnswer.edibility);
          setHints(hints);
        } else if (guessesRemaining === 2) {
          hints.push(correctAnswer.mostNotableFeature);
          setHints(hints);
        }
      }

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
        <Guesses guessCount={guessesRemaining}></Guesses>
        <Timer addedMinutes={minutes} timerDone={() => finished(false)}></Timer>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <img src={getImageUrl()}></img>
        </div>
        <div className={styles.halfScreen}>
          <Answers possibleAnswers={possibleAnswers} correctId={correctId} incorrectAnswer={() => setUpdate(true)} correctAnswer={() => finished(true)}></Answers>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <button className={styles.button} onClick={() => setOpenHintModal(true)}>hints</button>
      </div>
      <Modal modalOpen={openHintModal} setClose={() => setOpenHintModal(false)} title="Hints" items={hints.length === 0 ? ["No hints are visible on first guess."] : hints}></Modal>
    </div>
  )
}

export default GamePage;
