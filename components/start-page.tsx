import styles from '../styles/Game.module.css';

export interface StartPageProps {
  minutes: number;
  guesses: number;
  startGame: () => void;
}

const StartPage = ({ startGame, minutes, guesses }: StartPageProps) => {
  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.title}>Foragele</h1>
      <h2>Rules!</h2>
      <ul className={styles.table}>
        <li className={styles.tableItem}>Guess the plant / fungus based on a picture and list of clues.</li>
        <li className={styles.tableItem}>There will be a new plant / fungus each day.</li>
        <li className={styles.tableItem}>{`You have ${minutes} minutes to guess correctly.`}</li>
        <li className={styles.tableItem}>{`You have ${guesses} chances to guess correctly.`}</li>
        <li className={styles.tableItem}>The correct answer can be either the Latin or English name for the plant / fungus.</li>
        <li className={styles.tableItem}>Hints will be added on each incorrect guess.</li>
      </ul>
      <button className={`${styles.button} no-select`} onClick={startGame}>Begin</button>
    </div>
  )
}

export default StartPage;
