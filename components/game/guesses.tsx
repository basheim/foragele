import { useEffect, useState } from 'react';
import styles from '../../styles/Animations.module.css';

export interface GuessesProps {
  guessCount: number;
}

const Guesses = ({ guessCount }: GuessesProps) => {
  const [triggerAnnimation, setTriggerAnnimation] = useState<boolean>(false);
  const [count, setCount] = useState<number>(guessCount);

  useEffect(() => {
    if (guessCount !== count) {
      setTriggerAnnimation(true);
      setCount(guessCount);
    }
  }, [guessCount]);

  return (
    <div className={styles.guessContainer}>
        <h3>{`Guesses: ${guessCount}`}</h3>
        {triggerAnnimation && <h3 
          className={styles.minusOne}
          onAnimationEnd={() => setTriggerAnnimation(false)}
        >
          -1
        </h3>}
    </div>
  )
}

export default Guesses;
