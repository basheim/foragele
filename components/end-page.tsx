import Link from 'next/link';
import { LossReason } from '../lib/enums';
import { getStringTime } from '../lib/helpers';
import { Answer, GameInfo } from '../lib/interfaces';
import styles from '../styles/Game.module.css';

export interface EndPageProps {
  gameInfo: GameInfo;
}

const EndPage = ({ gameInfo }: EndPageProps) => {

  const getTitleText = () => {
    let text = "You guessed correctly, come back tomorrow to play again!!";
    if (!gameInfo.isWinner) {
      if (gameInfo.lossReason === LossReason.Timeout) {
        text = "Sorry, you have run out of time, come back tomorrow to play again!!";
      } else {
        text = "Sorry, you have run out of guesses, come back tomorrow to play again!!";
      }
    }
    return text;
  }

  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.title}>{getTitleText()}</h1>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <img src={gameInfo.correctAnswer.imageUrl}></img>
        </div>
        <div className={styles.halfScreen}>
          <h2>Plant Information:</h2>
          <ul>
            <li>{`Name: ${gameInfo.correctAnswer.name}`}</li>
            <li>{`Region: ${gameInfo.correctAnswer.region}`}</li>
            <li>{`Edibility: ${gameInfo.correctAnswer.edibility}`}</li>
            <li>{`A Notable Feature: ${gameInfo.correctAnswer.mostNotableFeature}`}</li>
          </ul>
          <h2>Game Stats:</h2>
          <ul>
            <li>{`Time Remaining: ${getStringTime(gameInfo.timeRemaining)}`}</li>
            <li>{`Guesses Remaining: ${gameInfo.guessesRemaining}`}</li>
          </ul>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <Link href="/">
          <button className={`${styles.button} no-select`}>Back to home</button>
        </Link>
      </div>
    </div>
  )
}

export default EndPage;
