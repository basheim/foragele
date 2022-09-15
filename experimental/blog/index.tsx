import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/layout/footer';
import Hor from '../../components/layout/hor';
import Sidebar from '../../components/layout/sidebar';
import TextItem from '../../components/layout/text-item';
import Vert from '../../components/layout/vert';
import TopBar from '../../components/navigation/top-bar';
import styles from '../../styles/Home.module.css';


const BlogHome = () => {
  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>Programming with Bean - Blog Home</title>
        <meta name="description" content="Website with Bean's programming projects, games, and blog. Centeral page for blog related posts." />
        <link rel="apple-touch-icon" sizes="180x180" href="/main/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/main/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/main/favicon-16x16.png" />
        <link rel="android-chrome-192x192" type="image/png" sizes="192x192" href="/main/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" type="image/png" sizes="512x512" href="/main/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/main/favicon.ico" />
        <link rel="manifest" href="/main/site.webmanifest" />
      </Head>
      <TopBar/>
      <main className={styles.main}>
        <Hor>
          <Sidebar backgroundColor="lightgrey">
            <p>Nothing here for now</p>
          </Sidebar>
          <Vert fullScreen>
            <TextItem title="Blog Home" body="No blog posts for now, but will contain the newest blog posts in the future."/>
          </Vert>
        </Hor>
        <Footer/>
      </main>
    </div>
  )
}

export default BlogHome;
