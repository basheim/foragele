import Head from 'next/head';
import Script from 'next/script';
import Hor from '../components/layout/hor';
import TextItem from '../components/layout/text-item';
import Vert from '../components/layout/vert';
import styles from '../styles/Home.module.css';


const Home = () => {

  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"/>
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
      <main className={styles.main}>
        <Hor>
          <Vert fullScreen>
            <TextItem title="The Beginning" body="This is just the beginning of the wedsite. More games, blog posts, and general programming content will be added soon."/>
          </Vert>
        </Hor>
      </main>
    </div>
  )
}

export default Home
