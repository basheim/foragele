import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { authenticate } from '../lib/auth-api';
import styles from '../styles/Home.module.css';
import inputStyles from '../styles/Input.module.css';
import Vert from '../components/layout/vert';
import Input from '../components/general/input';

export interface LoginProps {
}

const Login = ({}: LoginProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const submitLogin = async () => {
    setError('');
    try {
      await authenticate(username, password);
    } catch {
      setError("Invalid Username or Password.")
      console.log('Failed login');
      return;
    }
    router.push('/');
  };

  const changePassword = (val: string) => {
    setError('');
    setPassword(val);
  };

  const changeUsername = (val: string) => {
    setError('');
    setUsername(val);
  };

  return (
    <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>Programming with Bean - Login</title>
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
        <Vert fullScreen>
          <div className={styles.spacingNoWidthTop}/>
          <Input name='Username' onChange={changeUsername}/>
          <Input name='Password' onChange={changePassword}/>
          <div className={styles.spacingNoWidth1}/>
          {username.length > 0 && password.length > 0 &&
            <button className={`${inputStyles.button} ${styles.fadeIn}`} onClick={submitLogin}>
              Submit
            </button>
          }
          {error.length > 0 &&
            <p className={`${styles.error} ${styles.fadeIn}`}>{error}</p>
          }
        </Vert>
      </main>
    </div>
  )
}

export default Login;
