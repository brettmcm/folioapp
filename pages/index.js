import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Brett McMillin</title>
        <meta name="description" content="Meditation on design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.mainContent}>
        <h1 className={inter.className}>— brettmcm.me</h1>
        <h2 className={inter.className}>Entifrely obsessed with details and space as a meditation on design. Maker of <a href="http://www.moks.app">Moks</a>. Currently working as a Product Design Manager at <a href="http://www.experian.com/">Experian</a></h2>
      </main>
    </>
  )
}
