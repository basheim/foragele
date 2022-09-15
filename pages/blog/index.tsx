import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/layout/footer';
import Hor from '../../components/layout/hor';
import RowItem from '../../components/layout/row-item';
import Sidebar from '../../components/layout/sidebar';
import TextItem from '../../components/layout/text-item';
import Vert from '../../components/layout/vert';
import TopBar from '../../components/navigation/top-bar';
import { PreviewData } from '../../lib/interfaces';
import styles from '../../styles/Home.module.css';


export interface BlogHomeProps {
  previews: PreviewData[];
}

const BlogHome = ({ previews }: BlogHomeProps) => {

  const PREVIEW_LIMIT = 8;

  const getPreviews = () => {
    const limitedPreviews = previews.sort((a,b) => b.createdDate.getTime() - a.createdDate.getTime()).slice(0, PREVIEW_LIMIT);
    const htmlList = [];
    for (const preview of limitedPreviews) {
      htmlList.push(<RowItem key={preview.id} title={preview.title} miniText={preview.description} urlPath={`/blog/${preview.id}`}/>)
    }
    return htmlList;
  };

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
            {getPreviews()}
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

export async function getStaticProps() {
  const res = await fetch(`https://backend.programmingbean.com/api/v1/previews`);
  const previews = await res.json() as PreviewData[];
  return { props: { previews } }
}

export default BlogHome;
