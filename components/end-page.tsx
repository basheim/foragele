import styles from '../styles/Game.module.css';

export interface EndPageProps {
}

const EndPage = ({ }: EndPageProps) => {
  return (
    <div className={styles.gameContainer}>
      <h1>End</h1>
    </div>
  )
}

export default EndPage;
