// pages/index.js
import Head from 'next/head'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yogi K – Microsoft 365 Expert</title>
        <meta
          name="description"
          content="Professional portfolio of Yogi K — Microsoft 365 consultant with 10+ years of experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Renders your entire multi-section portfolio */}
      <Portfolio />
    </>
  )
}
