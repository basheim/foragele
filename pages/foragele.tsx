import Head from 'next/head';
import { useEffect, useState } from 'react';
import { buffer } from 'stream/consumers';
import EndPage from '../components/end-page';
import GamePage from '../components/game-page';
import StartPage from '../components/start-page';
import { GameState, LossReason } from '../lib/enums';
import { Answer, GameInfo } from '../lib/interfaces';
import styles from '../styles/Home.module.css';

interface ForageleProps {
  answers: Answer[];
  correctId: string;
}

const Foragele = ({ answers, correctId }: ForageleProps) => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [gameInfo, setGameInfo] = useState<GameInfo>({} as any);
  const timeLimitMinutes = 2;
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
    // localStorage.setItem('foragele', Buffer.from(JSON.stringify(gameInfo), 'utf-8').toString('base64'));
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
    const encodedPrevGameInfo = localStorage.getItem('foragele');
    if (encodedPrevGameInfo) {
        const previousGameInfo = JSON.parse(Buffer.from(encodedPrevGameInfo, 'base64').toString('utf-8')) as GameInfo;
        if (previousGameInfo.correctAnswer.id === correctId) {
            setGameInfo(previousGameInfo);
            setGameState(GameState.End);
        } else {
            localStorage.removeItem('foragele');
        }
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Foragele</title>
        <meta name="description" content="Learn more about wild plants!" />
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

// This also gets called at build time
export async function getStaticProps() {
  const res = await fetch(`http://beans-backend-lb-1879534989.us-west-2.elb.amazonaws.com:80/api/v1/plants`);
  const answers = await res.json()

  // Pass post data to the page via props
  return { props: { answers, correctId: "1" } }
}

export default Foragele
