import { useEffect, useState } from 'react';
import { getStringTime, MINUTE_IN_MS } from '../lib/helpers';

export interface TimerProps {
  addedMinutes: number;
  update: (timeRemaining: number) => void;
}

const Timer = ({ addedMinutes, update }: TimerProps) => {
  const [timeString, setTimeString] = useState("");
  const end = new Date(Date.now() + addedMinutes * MINUTE_IN_MS);
  
  useEffect(() => {
    countDownTimer();
  }, []);

  const countDownTimer = () => {
    function showRemaining() {
        const now = new Date();
        let diff = end.getTime() - now.getTime();

        if (diff <= 0) {
          diff = 0;
        }
        
        update(diff);
        setTimeString(getStringTime(diff));
    }
    setInterval(showRemaining, 100);
  };

  return (
    <h3>{timeString}</h3>
  )
}

export default Timer;
