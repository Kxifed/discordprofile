import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>x2 discord profile!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
        </p>
      </main>
    </div>
  )
}
