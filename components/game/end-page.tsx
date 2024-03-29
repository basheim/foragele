import Link from 'next/link';
import { LossReason } from '../../lib/enums';
import { getStringTime } from '../../lib/helpers';
import { GameInfo } from '../../lib/interfaces';
import styles from '../../styles/Game.module.css';
import homeStyles from '../../styles/Home.module.css';
import Hor from '../layout/hor';
import Vert from '../layout/vert';

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
    <Vert fullScreen>
      <h1 className={styles.title}>{getTitleText()}</h1>
      <div className={styles.fullScreen}>
        <img src={gameInfo.correctAnswer.imageUrl}></img>
      </div>
      <div className={homeStyles.spacing2}></div>
      <Hor>
        <div className={styles.halfScreenBorder}>
          <h2>Plant Information</h2>
          <ul>
            <li>{`Name: ${gameInfo.correctAnswer.english}`}</li>
            <li>{`Latin: ${gameInfo.correctAnswer.latin}`}</li>
            <li>{`Found Near: ${gameInfo.correctAnswer.foundNear}`}</li>
            <li>{`Edibility: ${gameInfo.correctAnswer.edibility}`}</li>
            <li>{`Key Features: ${gameInfo.correctAnswer.keyFeatures}`}</li>
            <li>{`Poisonous Look Alike: ${gameInfo.correctAnswer.poisonousLookAlike}`}</li>
          </ul>
        </div>
        <div className={styles.halfScreenBorder}>
          <h2>Game Stats</h2>
          <ul>
            <li>{`Time Remaining: ${getStringTime(gameInfo.timeRemaining)}`}</li>
            <li>{`Guesses Remaining: ${gameInfo.guessesRemaining}`}</li>
          </ul>
        </div>
      </Hor>
      <div className={homeStyles.spacing1}></div>
      <Link href="/">
        <button className={`${homeStyles.button} no-select`}>Back to home</button>
      </Link>
      <div className={styles.informationSourceDiv}>
        <span className={styles.informationSourceSpan}>Information Source:</span>
        <a href="https://www.amazon.com/All-That-Rain-Promises-More/dp/0898153883">All That the Rain Promises, and More...</a>
      </div>
    </Vert>
  )
}

export default EndPage;
