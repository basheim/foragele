import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EndPage from '../components/end-page';
import GamePage from '../components/game-page';
import StartPage from '../components/start-page';
import styles from '../styles/Home.module.css';

export enum GameState {
  Start,
  Game,
  End
}

const Home: NextPage = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);

  const startGame = () => {
    setGameState(GameState.Game);
  };

  const getGamePage = () => {
    switch(gameState) {
      case(GameState.Start): return(<StartPage startGame={startGame}></StartPage>);
      case(GameState.Game): return(<GamePage></GamePage>);
      case(GameState.End): return(<EndPage></EndPage>);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Foragele</title>
        <meta name="description" content="Learn more about wild plants!" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="android-chrome-192x192" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        {getGamePage()}
      </main>
    </div>
  )
}

export default Home
