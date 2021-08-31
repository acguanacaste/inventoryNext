import Head from 'next/head'
import {Typography} from "@material-ui/core";
import Layout from "../components/Layout";
import Link from "../components/Link";
import {FormattedMessage} from "react-intl";
export default function Home(props) {
    
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <nav>
            
            </nav>
            <main className="">
                <Typography variant={"h3"}>
                    <FormattedMessage
                        defaultMessage="Bienvenido al Inventario de Biodiversidad de ACG"
                    />
                </Typography>
                <Typography>
                    <FormattedMessage defaultMessage="Este es un texto aleatorio" /> <Link href={"#"}>Test</Link>
                    <FormattedMessage defaultMessage="ACG contiene cuatro ecosistemas tropicales unidos: marino-costero, bosque seco, bosuqe nuboso y bosque lluvioso" />
                </Typography>
            </main>
        </Layout>
    )
}

