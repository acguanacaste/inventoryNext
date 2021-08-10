import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
          <nav>
              <Link href={"/upload"}>Upload a File</Link>
          </nav>
       <h1>Welcome to the ACG Biodiversity Inventory </h1>
      </main>

    </div>
  )
}
