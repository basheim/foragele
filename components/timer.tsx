import { useEffect, useState } from 'react';

export interface TimerProps {
  addedMinutes: number;
  timerDone: () => void;
}

const Timer = ({ addedMinutes, timerDone }: TimerProps) => {
  const [timeString, setTimeString] = useState("");
  const _second = 1000;
  const _minute = _second * 60;
  const end = new Date(Date.now() + addedMinutes * _minute);
  
  useEffect(() => {
    countDownTimer();
  }, []);

  const countDownTimer = () => {
    function showRemaining() {
        const now = new Date();
        let diff = end.getTime() - now.getTime();

        if (diff <= 0) {
          diff = 0;
          timerDone();
        }

        const minutes = Math.floor(diff / _minute);
        const seconds = Math.floor((diff % _minute) / _second).toLocaleString(undefined, {minimumIntegerDigits : 2});

        const string = `${minutes}:${seconds}`;

        setTimeString(string);
    }
    setInterval(showRemaining, 100);
  };

  return (
    <h3>{timeString}</h3>
  )
}

export default Timer;
