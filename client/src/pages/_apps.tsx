import {Fragment, FunctionComponent} from "react";
import {AppProps} from "next/app";
import Head from "next/head";
import Layout from "@/components/layout";

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return (
        <Fragment>
            <Head>
                <title>EVENTS</title>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta charSet="utf-8"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>

            <div id="portal-root"></div>
        </Fragment>
    )
}

export default App;