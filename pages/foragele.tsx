import Head from 'next/head';
import { useState } from 'react';
import EndPage from '../components/end-page';
import GamePage from '../components/game-page';
import StartPage from '../components/start-page';
import { GameState } from '../lib/enums';
import { Answer } from '../lib/interfaces';
import styles from '../styles/Home.module.css';

interface ForageleProps {
  answers: Answer[];
}

const Foragele = ({ answers }: ForageleProps) => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const timeLimitMinutes = 2;
  const guesses = 4;

  const finishGame = (hasWon: boolean) => {
    hasWon ? setGameState(GameState.Win) : setGameState(GameState.Lose);
  };

  const startGame = () => {
    setGameState(GameState.Game);
  };

  const getGamePage = () => {
    switch(gameState) {
      case(GameState.Start): return(<StartPage minutes={timeLimitMinutes} guesses={guesses} startGame={startGame}></StartPage>);
      case(GameState.Game): return(<GamePage minutes={timeLimitMinutes} guesses={guesses} finished={finishGame} correctId="1" possibleAnswers={answers}></GamePage>);
      case(GameState.Win): return(<EndPage></EndPage>);
      case(GameState.Lose): return(<EndPage></EndPage>);
    }
  }

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
  return { props: { answers } }
}

export default Foragele
