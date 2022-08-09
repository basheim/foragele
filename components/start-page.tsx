import styles from '../styles/Game.module.css';

export interface StartPageProps {
  startGame: () => void;
}

const StartPage = ({ startGame }: StartPageProps) => {
  return (
    <div className={styles.gameContainer}>
      <h2>Rules!</h2>
      <ul className={styles.table}>
        <li className={styles.tableItem}>Guess the plant / fungus based on a picture and list of clues.</li>
        <li className={styles.tableItem}>You have 2 minutes to guess correctly.</li>
        <li className={styles.tableItem}>You have 5 chances to guess correctly.</li>
        <li className={styles.tableItem}>The correct answer can be either the Latin or English name for the plant / fungus.</li>
        <li className={styles.tableItem}>A hint will be added for each missing chance.</li>
      </ul>
      <button className={`${styles.button} no-select`} onClick={startGame}>Begin</button>
    </div>
  )
}

export default StartPage;
