import { LossReason } from '../lib/enums';
import { Answer, GameInfo } from '../lib/interfaces';
import styles from '../styles/Game.module.css';

export interface EndPageProps {
  gameInfo: GameInfo;
}

const EndPage = ({ gameInfo }: EndPageProps) => {

  const getTitleText = () => {
    let text = "You guessed correctly!!";
    if (!gameInfo.isWinner) {
      if (gameInfo.lossReason === LossReason.Timeout) {
        text = "Sorry, you have run out of time. Better luck tomorrow!!";
      } else {
        text = "Sorry, you are incorrect. Better luck tomorrow!!";
      }
    }
    return text;
  }

  return (
    <div className={styles.gameContainer}>
      <h1>{getTitleText()}</h1>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <img src={gameInfo.correctAnswer.imageUrl}></img>
        </div>
        <div className={styles.halfScreen}>
          <h3>{`${gameInfo.correctAnswer.name}:`}</h3>
          <ul>
            <li>{`Region: ${gameInfo.correctAnswer.region}`}</li>
            <li>{`Edibility: ${gameInfo.correctAnswer.edibility}`}</li>
            <li>{`A Notable Feature: ${gameInfo.correctAnswer.mostNotableFeature}`}</li>
          </ul>
          <h3>Game Stats:</h3>
          <ul>
            <li>{`Time Remaining: ${gameInfo.timeRemaining}`}</li>
            <li>{`Guesses Remaining: ${gameInfo.guessesRemaining}`}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EndPage;
