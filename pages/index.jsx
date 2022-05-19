import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal do Açaí - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </>
  )
}