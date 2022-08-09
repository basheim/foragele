import styles from '../styles/Game.module.css';
import Answers, { Answer } from './answers';
import Timer from './timer';

export interface GamePageProps {
}

const GamePage = ({ }: GamePageProps) => {

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

  return (
    <div className={styles.gameContainer}>
      <Timer addedMinutes={2} timerDone={() => {}}></Timer>
      <div className={styles.fullScreen}>
        <Answers possibleAnswers={testAnswers} checkAnswer={() => {}}></Answers>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.halfScreen}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG"></img>
        </div>
        <div className={styles.halfScreen}>
          <h3 className={styles.subTitle}>Hints</h3>
          <ul className={styles.table}>
            <li className={styles.tableItem}>test</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
