import Head from 'next/head'
import {Typography} from "@material-ui/core";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="">
                <Typography variant={"h3"}>Welcome to the ACG Biodiversity Inventory </Typography>
                <Typography>
                    This is some random text
                </Typography>
            </main>
        </Layout>
    )
}
