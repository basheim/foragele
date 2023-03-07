import Head from 'next/head';
import Script from 'next/script';
import BoxContainer from '../components/layout/box/box-container';
import Hor from '../components/layout/hor';
import Sidebar from '../components/layout/sidebar';
import Vert from '../components/layout/vert';
import { ModalData, ModalLinkData } from '../lib/interfaces';
import styles from '../styles/Home.module.css';

const experience: ModalData[] = [
  {
    text: "Software Engineer II - Bluecrew Inc.",
    modalTitle: "Software Engineer II - Bluecrew Inc.",
    modalItems: ["Title: Software Engineer II", "Company: Bluecrew Inc.", "Start: Oct. 2021", "End: Jul. 2022"]
  },
  {
    text: "Software Engineer II - Qualtrics Inc.",
    modalTitle: "Software Engineer II - Qualtrics Inc.",
    modalItems: ["Title: Software Engineer II", "Company: Qualtrics Inc.", "Start: Jan. 2020", "End: Jul. 2021"]
  },
  {
    text: "Software Development Engineer in Test - Qualtrics Inc.",
    modalTitle: "Software Development Engineer in Test - Qualtrics Inc.",
    modalItems: ["Title: Software Development Engineer in Test", "Company: Qualtrics Inc.", "Start: Nov. 2016", "End: Dec. 2019"]
  },
  {
    text: "Product Engineer - Micron Inc.",
    modalTitle: "Product Engineer - Micron Inc.",
    modalItems: ["Title: Product Engineer", "Company: Micron Inc.", "Start: Jul. 2015", "End: Oct. 2016"]
  }
];

const education: ModalData[] = [
  {
    text: "University of Washington",
    modalTitle: "University of Washington",
    modalItems: ["Degree: Bachelor of Science", "Major: Electrical Engineering", "Minor: Mathematics", "Graduated: 2015", "Campus: Seattle"]
  }
];

const skills: ModalData[] = [
  {
    text: "Javascript",
    modalTitle: "Javascript",
    modalItems: ["Experience: 5 Years"]
  },
  {
    text: "Typescript",
    modalTitle: "Typescript",
    modalItems: ["Experience: 4 Years"]
  },
  {
    text: "Java",
    modalTitle: "Java",
    modalItems: ["Experience: 3 Years"]
  },
  {
    text: "Python",
    modalTitle: "Python",
    modalItems: ["Experience: 3 Years"]
  },
  {
    text: "ReactJS",
    modalTitle: "ReactJS",
    modalItems: ["Experience: 2.5 Years"]
  },
  {
    text: "Angular",
    modalTitle: "Angular",
    modalItems: ["Experience: 2.5 Years"]
  },
  {
    text: "NodeJS",
    modalTitle: "NodeJS",
    modalItems: ["Experience: 5 Years"]
  },
  {
    text: "Spring",
    modalTitle: "Spring",
    modalItems: ["Experience: 2 Years"]
  },
  {
    text: "AWS",
    modalTitle: "AWS",
    modalItems: ["Experience: 2 Years"]
  },
  {
    text: "Google Cloud Platform",
    modalTitle: "Google Cloud Platform",
    modalItems: ["Experience: 1 Year"]
  },
  {
    text: "GIT",
    modalTitle: "GIT",
    modalItems: ["Experience: 5 Years"]
  },
  {
    text: "SQL",
    modalTitle: "SQL",
    modalItems: ["Experience: 2 Years"]
  }
];

const links: ModalLinkData[] = [
  {
    text: "Website",
    link: "https://programmingbean.com"
  },
  {
    text: "Github",
    link: "https://github.com/basheim"
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/brandon-asheim-14a5b695/"
  },
  {
    text: "Resume",
    link: "/resume.pdf"
  }
];


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
      <main className={styles.main}>
        <Hor>
          <Sidebar>
            <div className={styles.imageContainer}>
              <img src="/profile.jpg"/>
            </div>
          </Sidebar>
          <Vert fullScreen>
            <h2>Brandon Asheim</h2>
            <p>Quality driven full-stack developer with 5+ years of experience building scalable web applications and internal tools.</p>
            <h4>Work Experience</h4>
            <BoxContainer modalSelectors={experience}/>
            <h4>Education</h4>
            <BoxContainer modalSelectors={education}/>
            <h4>Skills</h4>
            <BoxContainer modalSelectors={skills}/>
            <h4>Links</h4>
            <BoxContainer modalLinkSelectors={links}/>
          </Vert>
        </Hor>
      </main>
    </div>
  )
}

export default About;
