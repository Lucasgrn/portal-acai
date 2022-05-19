import Head from 'next/head'
import { Box, Text } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal do Açaí</title>
        <meta name="description" content="Portal do Açaí" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </>
  )
}
