import Head from 'next/head';
import Script from 'next/script';
import ChildItem from '../components/layout/child-item';
import Footer from '../components/layout/footer';
import Hor from '../components/layout/hor';
import RowItem from '../components/layout/row-item';
import Sidebar from '../components/layout/sidebar';
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
      <TopBar/>
      <main className={styles.main}>
        <Hor>
          <Sidebar>
            <div className={styles.imageContainer}>
              <img src="/profile.jpg"/>
            </div>
            <h4 className={styles.aboutInfo}>Full Stack Software Engineer</h4>
            <h5 className={styles.aboutInfo}>6 Years Experience</h5>
            <div className={styles.spacing1}></div>
          </Sidebar>
          <Vert fullScreen>
            <ChildItem>
              <h2>Brandon Asheim</h2>
              <p>Quality driven full stack developer with 5+ years of experience building scalable web applications and internal tools.</p>
              <h4>Work Experience</h4>
              <ul>
                <li>Software Engineer - Bluecrew Inc.</li>
                <li>Software Engineer - Qualtrics Inc.</li>
                <li>Software Development in Test - Qualtrics Inc.</li>
                <li>Software Test Engineer - Qualtrics Inc.</li>
                <li>Product Engineer - Micron Inc.</li>
              </ul>
              <h4>Acedemics</h4>
              <ul>
                <li>BS in Electrical Engineering from University of Washington</li>
              </ul>
              <h4>Skills</h4>
              <ul>
                <li>ReactJS</li>
                <li>Javascript</li>
                <li>NodeJS</li>
                <li>Spring</li>
                <li>Java</li>
                <li>Python</li>
                <li>AWS</li>
                <li>Firebase</li>
              </ul>
            </ChildItem>
            <RowItem title='Download Resume' centerText urlPath='/resume.pdf'/>
          </Vert>
        </Hor>
      </main>
      <Footer/>
    </div>
  )
}

export default About;
