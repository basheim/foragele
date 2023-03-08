import styles from '../../styles/Game.module.css';
import homeStyles from '../../styles/Home.module.css';
import Vert from '../layout/vert';

export interface StartPageProps {
  minutes: number;
  guesses: number;
  startGame: () => void;
}

const StartPage = ({ startGame, minutes, guesses }: StartPageProps) => {
  return (
    <Vert fullScreen >
      <h1 className={styles.title}>Foragele</h1>
      <h2>Rules!</h2>
      <ul className={styles.table}>
        <li className={styles.tableItem}>Guess the plant / fungus based on a picture and list of clues.</li>
        <li className={styles.tableItem}>There will be a new plant / fungus each day.</li>
        <li className={styles.tableItem}>{`You have ${minutes} minutes to guess correctly.`}</li>
        <li className={styles.tableItem}>{`You have ${guesses} chances to guess correctly.`}</li>
        <li className={styles.tableItem}>Hints will be added on each incorrect guess.</li>
      </ul>
      <button className={`${homeStyles.button} no-select`} onClick={startGame}>Begin</button>
    </Vert>
  )
}

export default StartPage;
