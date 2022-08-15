/* eslint-disable @next/next/no-page-custom-font */
import App from "next/app";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

import ThemeProviderContext from "../theme/theme";

import { appWithTranslation } from "next-i18next";

import { wrapper } from "../store/store";

import "../public/css/all.min.css";
import "../styles/variables.scss";
import "../styles/globals.scss";

class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(
    (store) => async (context) => {
      // console.log(store.getState().user.user);
      return {};
    }
  );

  // state = {
  //   showLoader: false
  // }

  componentDidMount() {
    // PAGES LOADER
    // Router.events.on('routeChangeStart', () => {
    //   this.setState({
    //     showLoader: true
    //   })
    // })
    // Router.events.on('routeChangeComplete', () => {
    //   this.setState({
    //     showLoader: false
    //   })
    // })
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        {console.log()}
        <Head>
          <title>Laravelcamp</title>
          <link rel="shortcut icon" href="/assets/imgs/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ThemeProviderContext>
          {router.pathname.startsWith("/login") ||
          router.pathname.startsWith("/signup") ? (
            <Component {...pageProps} />
          ) : (
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          )}
        </ThemeProviderContext>
      </>
    );
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp));
