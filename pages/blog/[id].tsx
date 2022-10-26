import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Hor from '../../components/layout/hor';
import HtmlItem from '../../components/layout/html-item';
import RowItem from '../../components/layout/row-item';
import Sidebar from '../../components/layout/sidebar';
import Vert from '../../components/layout/vert';
import { PostData, PostPageData, PreviewData } from '../../lib/interfaces';
import styles from '../../styles/Home.module.css';

export interface PostProps {
  post: PostData;
  previews: PreviewData[];
}

const Post = ({post, previews} : PostProps) => {
  const getPreview = () => {
    const html = [];
    for (let preview of previews) {
      html.push(<RowItem key={preview.id} title={preview.title} miniText={preview.description} urlPath={preview.id}/>)
    }
    return html;
  };

  const getButton = (href: string, buttonText: string) => {
    return (
      <div className={styles.buttonContainer}>
        <Link href={href}>
          <button className={`${styles.button} no-select`}>{buttonText}</button>
        </Link>
      </div>
    );
  };

  const getJustifyContent = () => {
    if (post.prev && post.next) {
      return "space-between";
    } else if (post.prev) {
      return "start";
    } else {
      return "end";
    }
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9555454070901210"></Script>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
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
            <h3 style={{textAlign: 'center'}}>Similar Articles</h3> 
           {getPreview()}
          </Sidebar>
          <Vert fullScreen justify='space-between'>
            <HtmlItem html={post.content}/>
            {(post.next || post.prev) && 
              <Hor align='center' justify={getJustifyContent()}>
                {post.prev && getButton(post.prev, "<- Prev")}
                {post.next && getButton(post.next, "Next ->")}
              </Hor>
            }
          </Vert>
        </Hor>
      </main>
    </div>
    </React.Fragment>
  )
}

export interface Params {
  params: {
    id: string
  }
};

export async function getStaticProps({ params }: Params) {
  const res = await fetch(`https://backend.programmingbean.com/api/v1/posts/${params.id}`);
  const postPage = await res.json() as PostPageData;
  return { props: { post: postPage.post, previews: postPage.previews } };
}

export async function getStaticPaths() {
  const res = await fetch(`https://backend.programmingbean.com/api/v1/posts/ids`);
  const previews = await res.json() as String[];
  
  return { 
    paths: previews.map((preview) => {
      return {
        params: {
          id: preview
        }
      }
    }),
    fallback: false,
  };
}

export default Post;
