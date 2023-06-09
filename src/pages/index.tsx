import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css' 

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          <h1 className=' text-3xl font-bold text-center'>Cook Mate</h1>
          <p className='text-2xl font-normal text-center'>Simplifying meal prop one recipe at a time</p>
          <div className=' container flex flex-row justify-center m-2'>
            <input className=" p-2 pl-3 rounded-l-full outline-none" type="text" />
            <button className=' bg-white  rounded-r-full pr-3'><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </section>
      </main>
    </>
  )
}
