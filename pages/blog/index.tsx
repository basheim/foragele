import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import Hor from '../../components/layout/hor';
import RowItem from '../../components/layout/row-item';
import Sidebar from '../../components/layout/sidebar';
import Vert from '../../components/layout/vert';
import { PreviewData } from '../../lib/interfaces';
import styles from '../../styles/Home.module.css';


export interface BlogHomeProps {
  previews: PreviewData[];
}

const BlogHome = ({ previews }: BlogHomeProps) => {

  const SIDEBAR_LIMIT = 3;
  const MAIN_SEARCH_LIMIT = 5;
  const [filter, setFilter] = useState<string>("");

  const advancedFiltering = (title: string, description: string) => {
    const lowerCaseFilterComponents = filter.toLowerCase().split(' ');
    for (const comp of lowerCaseFilterComponents) {
      if (!title.toLowerCase().includes(comp.toLowerCase()) && !description.toLowerCase().includes(comp.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  const getPreviews = (useFilter?: boolean, limit?: number) => {
    const sortedPreviews = previews.sort((a,b) => (new Date(b.createdDate)).getTime() - (new Date(a.createdDate)).getTime());
    const htmlList = [];
    for (const preview of sortedPreviews) {
      if (useFilter && !advancedFiltering(preview.title, preview.description)) {
        continue;
      }
      if (limit !== undefined && htmlList.length >= limit) {
        break;
      }
      htmlList.push(<RowItem key={preview.id} title={preview.title} miniText={preview.description} urlPath={`/blog/${preview.id}`}/>)
    }
    return htmlList;
  };

  const [previewList, setPreviewList] = useState<JSX.Element[]>(getPreviews(true, MAIN_SEARCH_LIMIT));

  useEffect(() => {
    setPreviewList(getPreviews(true, MAIN_SEARCH_LIMIT));
  }, [filter]);

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
      <main className={styles.main}>
        <Hor>
          <Sidebar>
            <h3 style={{textAlign: 'center'}}>Recent Articles</h3> 
            {getPreviews(undefined, SIDEBAR_LIMIT)}
          </Sidebar>
          <Vert fullScreen>
            <div className={styles.searchContainer}>
              <h2>Search Articles:</h2>
              <input className={`${styles.filter} no-select`} type="text" value={filter} onChange={(e) => setFilter(e.currentTarget.value)} placeholder="Search..." />
            </div>
            {previewList}
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

export default BlogHome;
