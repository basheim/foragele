import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import EndPage from '../components/game/end-page';
import GamePage from '../components/game/game-page';
import StartPage from '../components/game/start-page';
import { GameState, LossReason } from '../lib/enums';
import { Answer, GameInfo } from '../lib/interfaces';
import styles from '../styles/Home.module.css';

interface ForageleProps {
  answers: Answer[];
}

const Foragele = ({ answers }: ForageleProps) => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [gameInfo, setGameInfo] = useState<GameInfo>({} as any);
  const [correctId, setCorrectId] = useState<string>("");
  const timeLimitMinutes = 4;
  const guesses = 4;

  const finishGame = (hasWon: boolean, timeRemaining: number, guessesRemaining: number, lossReason: LossReason | undefined) => {
    const gameInfo = {
        isWinner: hasWon,
        lossReason: lossReason,
        correctAnswer: answers.find((answer) => answer.id === correctId) || {} as any,
        timeRemaining: timeRemaining,
        guessesRemaining: guessesRemaining
    };
    // comment out for testing
    localStorage.setItem('foragele', Buffer.from(JSON.stringify(gameInfo), 'utf-8').toString('base64'));
    setGameInfo(gameInfo);
    setGameState(GameState.End);
  };

  const startGame = () => {
    setGameState(GameState.Game);
  };

  const getGamePage = () => {
    switch(gameState) {
      case(GameState.Start): return(<StartPage minutes={timeLimitMinutes} guesses={guesses} startGame={startGame}></StartPage>);
      case(GameState.Game): return(<GamePage minutes={timeLimitMinutes} guesses={guesses} finished={finishGame} correctId={correctId} possibleAnswers={answers}></GamePage>);
      case(GameState.End): return(<EndPage gameInfo={gameInfo}></EndPage>);
    }
  };

  useEffect(() => {
    const now = new Date();
    const userTimezoneOffset = now.getTimezoneOffset() * 60000;
    let maybeCorrectId = undefined;
    for (let answer of answers) {
      const start = (new Date(answer.start)).getTime() + userTimezoneOffset;
      const end = (new Date(answer.end)).getTime() + userTimezoneOffset;
      if (start <= now.getTime() && end >= now.getTime()) {
        maybeCorrectId = answer.id;
      }
    }

    if (!maybeCorrectId) {
      throw new Error("CRAP. no ID found.")
    }

    setCorrectId(maybeCorrectId);


    const encodedPrevGameInfo = localStorage.getItem('foragele');
    if (encodedPrevGameInfo) {
        const previousGameInfo = JSON.parse(Buffer.from(encodedPrevGameInfo, 'base64').toString('utf-8')) as GameInfo;
        if (previousGameInfo.correctAnswer.id === maybeCorrectId) {
            setGameInfo(previousGameInfo);
            setGameState(GameState.End);
        } else {
            localStorage.removeItem('foragele');
        }
    }
  }, []);

  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>Foragele - Learn more about wild plants!!</title>
        <meta name="description" content="A guessing game associated with wild plants and fungi inspired by Wordle. Grow your knowledge of wild plants and fungi." />
        <link rel="apple-touch-icon" sizes="180x180" href="/foragele/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/foragele/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/foragele/favicon-16x16.png" />
        <link rel="android-chrome-192x192" type="image/png" sizes="192x192" href="/foragele/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" type="image/png" sizes="512x512" href="/foragele/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/foragele/favicon.ico" />
        <link rel="manifest" href="/foragele/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        {getGamePage()}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://backend.programmingbean.com/api/v1/plants`);
  const answers = await res.json() as Answer[];
  return { props: { answers } }
}

export default Foragele
