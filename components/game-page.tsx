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
  const [timeRemaining, setTimeRemaining] = useState<number>(minutes * 60 * 1000);
  const [correctGuess, setCorrectGuess] = useState<boolean>(false);

  const getCorrectAnswer = () => {
    return possibleAnswers.find((answer) => answer.id === correctId);
  }

  const getImageUrl = (): string => {
    const correctAnswer = getCorrectAnswer();
    return correctAnswer ? correctAnswer.imageUrl : "error.png";
  }

  const updateTimeRemaining = (time: number) => {
    setTimeRemaining(time);
  }

  useEffect(() => {
    if (update) {
      const correctAnswer = getCorrectAnswer();
      if (correctAnswer) {
        if (guessesRemaining === 4) {
          hints.push(`<b>Feature</b>: ${correctAnswer.keyFeatures}`);
          setHints(hints);
        } else if (guessesRemaining === 3) {
          hints.push(`<b>Edibility</b>: ${correctAnswer.edibility}`);
          hints.push(`<b>Found near</b>: ${correctAnswer.foundNear}`);
          setHints(hints);
        } else if (guessesRemaining === 2) {
          hints.push(`<b>Poisonous look alike</b>: ${correctAnswer.poisonousLookAlike}`);
          setHints(hints);
        }
      }

      setUpdate(false);
      setGuessesRemaining(guessesRemaining - 1);
    }
    
    if (guessesRemaining === 0) {
      finished(false, timeRemaining, guessesRemaining, LossReason.IncorrectGuesses);
    }

    if (timeRemaining === 0) {
      finished(false, timeRemaining, guessesRemaining, LossReason.Timeout);
    }

    if (correctGuess) {
      finished(true, timeRemaining, guessesRemaining, undefined);
    }
  }, [guessesRemaining, update, timeRemaining, correctGuess]);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.timerContainer}>
        <Guesses guessCount={guessesRemaining}></Guesses>
        <Timer addedMinutes={minutes} update={updateTimeRemaining}></Timer>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <img src={getImageUrl()}></img>
        </div>
        <div className={styles.halfScreen}>
          <Answers possibleAnswers={possibleAnswers} correctId={correctId} incorrectAnswer={() => setUpdate(true)} correctAnswer={() => setCorrectGuess(true)}></Answers>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <button className={`${styles.button} no-select`} onClick={() => setOpenHintModal(true)}>hints</button>
      </div>
      <Modal modalOpen={openHintModal} setClose={() => setOpenHintModal(false)} title="Hints" items={hints.length === 0 ? ["No hints are visible on first guess."] : hints}></Modal>
    </div>
  )
}

export default GamePage;
