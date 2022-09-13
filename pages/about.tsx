import Head from 'next/head';
import Script from 'next/script';
import Hor from '../components/layout/hor';
import RowItem from '../components/layout/row-item';
import Sidebar from '../components/layout/sidebar';
import TextItem from '../components/layout/text-item';
import Vert from '../components/layout/vert';
import TopBar from '../components/navigation/top-bar';
import styles from '../styles/Home.module.css';


const About = () => {
  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>Programming with Bean - About Me</title>
        <meta name="description" content="Website with Bean's programming projects, games, and blog. Learn about the creator." />
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
        <Hor>
          <Sidebar backgroundColor='lightgrey'>
            <div className={styles.imageContainer}>
              <img src="/profile.jpg"/>
            </div>
            <h3 className={styles.aboutTitle}>Brandon Asheim</h3>
            <h5 className={styles.aboutInfo}>Full Stack Software Engineer</h5>
            <h5 className={styles.aboutInfo}>6 Years Experience</h5>
            <RowItem title='Download Resume' urlPath='/resume.pdf'></RowItem>
          </Sidebar>
          <Vert>
            <iframe src="https://drive.google.com/file/d/1bc7U1aebdUZDXnbx8iKxotXc37IOEzem/preview" height="1000" allow="autoplay" frameBorder={0}></iframe>
          </Vert>
        </Hor>
      </main>
    </div>
  )
}

export default About;
