import React, {useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme'
import English from '../content/locales/compiled/en.json'
import Spanish from '../content/locales/compiled/es.json'
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const {locale} = useRouter();
  const [shortLocale] = locale? locale.split("-"):["es"];
  
  const messages = useMemo(() =>{
      switch (shortLocale){
          case "en":
              return English;
          case "es":
              return Spanish;
          default:
              return Spanish;
      }
  },[shortLocale])
  
    useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
      <React.Fragment>
          <IntlProvider
              locale={shortLocale}
              messages={messages}
              onError={() => null}
          >
            
              <Head>
                  <title>Biodiversidad del ACG</title>
                  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
              </Head>
              <ThemeProvider theme={theme}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline/>
                  <Component {...pageProps} />
              </ThemeProvider>
          </IntlProvider>
      </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
