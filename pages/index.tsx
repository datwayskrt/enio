import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>enio.dev</title>
        <meta name="description" content="Énio Carlos Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          énio<a href="https://linkedin.com/in/eniocarlos">.dev</a>
        </h1>

        <p className={styles.description}>
          
          <a href=''>
          <code className={styles.code}>hireMe(👨🏿‍💻)</code> &rarr; software engineer{' 🚀'}
          </a>
        </p>

        <div className={styles.grid}>
          <ul className={styles.list}>
          <li><a href="#" className={styles.card}>
            <h2>Meet The Big O &rarr;</h2>
            <p>May 12, 2022</p>
          </a>
          </li>
          <li>
          <a href="#" className={styles.card}>
            <h2>Closures, a closer look &rarr;</h2>
            <p>Jul 22, 2022</p>
          </a>
          </li>
          <li>
          <a
            href="#"
            className={styles.card}
          >
            <h2>CPP is for everybody &rarr;</h2>
            <p>Apr 12, 2021</p>
          </a>
          </li>
          <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>You should Rust &rarr;</h2>
            <p>
              Dec 2, 2020
            </p>
          </a>
          </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
    
          <span className={styles.logo}>
            <a href='https://twitter.com/eniocarlosao' target={'_blank'} rel="noreferrer">
              <Image src="/git.svg" alt="github" width={72} height={16} />
            </a>
            <a href='https://github.com/datwayskrt' target={'_blank'} rel="noreferrer" >
               <Image src="/twt.svg" alt="twitter" width={72} height={16} />
            </a>
            <a href='https://linkedin.com/in/eniocarlos' target={'_blank'} rel="noreferrer">
              <Image src="/link.svg" alt="linkedin" width={72} height={16} />
            </a>
            
          </span>
        
      </footer>
    </div>
  )
}
