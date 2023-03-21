import { ReactElement, useRef, useState } from 'react';
import styles from '../../styles/Input.module.css';
import Hor from '../layout/hor';

export interface InputProps {
  name: string;
  onChange: (val:string) => void;
}

const Input = ({ name, onChange }: InputProps) => {
  const [button, setButton] = useState<boolean>(true);
  const [input, setInput] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [val, setVal] = useState<string>("");
  const inputRef = useRef(null);

  const buttonClick = () => {
    setFadeOut(true);
    setInput(true);
  }

  const fadeOutDone = () => {
    setButton(false);
    const curr: any = inputRef.current;
    if (curr) {
      curr.focus();
    }
  }

  const change = (value: string) => {
    setVal(value);
    onChange(value);
  }

  return (
    <Hor align='center'>
      <div className={styles.inputContainer}>
        {button && 
          <button 
            onClick={buttonClick}
            onAnimationEnd={fadeOutDone}
            className={fadeOut ? styles.fadeOut : styles.visible}
          >
            {name}
          </button>
        }
        {input && 
          <input
            ref={inputRef}
            className={styles.fadeIn}
            onChange={(e) => change(e.currentTarget.value)}
            value={val}
          />
        }
      </div>
    </Hor>
  )
}

export default Input;
