import Head from 'next/head';
import Script from 'next/script';
import Bannor from '../components/layout/bannor';
import Hor from '../components/layout/hor';
import RowItem from '../components/layout/row-item';
import Sidebar from '../components/layout/sidebar';
import TextItem from '../components/layout/text-item';
import Vert from '../components/layout/vert';
import TopBar from '../components/navigation/top-bar';
import styles from '../styles/Home.module.css';


const Home = () => {

  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>Programming with Bean</title>
        <meta name="description" content="Website with Bean's programming projects, games, and blog. Still growing, but some content to see." />
        <link rel="apple-touch-icon" sizes="180x180" href="/main/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/main/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/main/favicon-16x16.png" />
        <link rel="android-chrome-192x192" type="image/png" sizes="192x192" href="/main/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" type="image/png" sizes="512x512" href="/main/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/main/favicon.ico" />
        <link rel="manifest" href="/main/site.webmanifest" />
      </Head>
      <TopBar></TopBar>
      <main className={styles.main}>
        <Bannor backgroundColor="#a3bce3" title="Play Foragele Here!" subTitle="Learn about wild plants and fungi!" urlPath="/foragele"></Bannor>
        <Hor>
          <Sidebar backgroundColor="lightgrey">
            <RowItem title="About Me" subTitle="Learn more about the author." urlPath='/about'></RowItem>
          </Sidebar>
          <Vert>
            <TextItem title="The Beginning" body="This is just the beginning of the wedsite. More games, blog posts, and general programming content will be added soon."></TextItem>
          </Vert>
        </Hor>
      </main>
    </div>
  )
}

export default Home
