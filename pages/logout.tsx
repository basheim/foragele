import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { authenticate } from '../lib/auth-api';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export interface LogoutProps {
}

const Logout = ({}: LogoutProps) => {
  const router = useRouter();
  useEffect(() => {
    Cookies.remove('X-AUTH-TOKEN');
    Cookies.remove('X-AUTH-REFRESH');
    Cookies.remove('X-AUTH-USERNAME');
    router.push('/');
  }, []);

  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>Programming with Bean - Logout</title>
        <meta name="description" content="Website with Bean's programming projects, games, and blog. Learn about the creator." />
        <link rel="apple-touch-icon" sizes="180x180" href="/main/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/main/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/main/favicon-16x16.png" />
        <link rel="android-chrome-192x192" type="image/png" sizes="192x192" href="/main/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" type="image/png" sizes="512x512" href="/main/android-chrome-512x512.png" />
        <link rel="shortcut icon" href="/main/favicon.ico" />
        <link rel="manifest" href="/main/site.webmanifest" />
      </Head>
      <main className={styles.main}>
      </main>
    </div>
  )
}

export default Logout;
