import React from 'react';
import useMouse from '@react-hook/mouse-position'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function AddButton() {

  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  // const addButW = ref.current.clientWidth;
  // const addButH = ref.current.clientHeight;


  const gradientStyle = {
    "--cursor-x": ((mouse.x / 60) * 100) + '%',
    "--cursor-y": ((mouse.y / 60) * 100) + '%',
  };

  const [active, activate] = React.useState(false);

  return (
    <div ref={ref} className={active ? styles.addButton : styles.addButtonActive} onClick={() => activate(!active)}>
      <div className={styles.addButtonHighlight} style={gradientStyle}></div>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M12 5.75V18.25"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M18.25 12L5.75 12"></path>
      </svg>
    </div>
  )
}

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
        <AddButton />
      </main>
    </>
  )
}
