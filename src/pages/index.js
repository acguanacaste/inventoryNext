import Head from 'next/head'
import {Typography} from "@material-ui/core";
import Link from "../components/link"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
          <nav>
              <Link href={"/upload"}>Upload a File</Link> | <Link href={"https://acguanacaste.ac.cr"}>Área de Conservación Guanacaste</Link>
          </nav>
       <Typography variant={"h3"}>Welcome to the ACG Biodiversity Inventory </Typography>
          <Typography>
              This is some random text
          </Typography>
      </main>

    </div>
  )
}
