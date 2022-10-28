import Head from 'next/head';
import Script from 'next/script';
import Hor from '../components/layout/hor';
import RowItem from '../components/layout/row-item';
import TextItem from '../components/layout/text-item';
import Vert from '../components/layout/vert';
import { PreviewData } from '../lib/interfaces';
import styles from '../styles/Home.module.css';

export interface HomeProps {
  previews: PreviewData[];
}

const Home = ({ previews } : HomeProps) => {

  const LIMIT = 4;

  const getPreviews = (limit?: number) => {
    const sortedPreviews = previews.sort((a,b) => (new Date(b.createdDate)).getTime() - (new Date(a.createdDate)).getTime());
    const htmlList = [];
    for (const preview of sortedPreviews) {
      if (limit !== undefined && htmlList.length >= limit) {
        break;
      }
      htmlList.push(<RowItem key={preview.id} title={preview.title} miniText={preview.description} urlPath={`/blog/${preview.id}`}/>)
    }
    return htmlList;
  };

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
        <Vert>
          <h1>Welcome</h1>
        </Vert>
        <Hor>
          <Vert fullScreen>
            <h3>Suggested Articles</h3>
            <Hor>
              {getPreviews(LIMIT)}
            </Hor>
            <h3>Suggested Games</h3>
            <Hor>
              <RowItem key="foragele" title="Foragele" miniText="Learn more about wild plants and fungi." urlPath="/foragele"/>
            </Hor>
          </Vert>
        </Hor>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://backend.programmingbean.com/api/v1/previews`);
  const previews = await res.json() as PreviewData[];
  return { props: { previews } }
}

export default Home
