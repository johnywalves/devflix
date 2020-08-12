import { AppProps } from 'next/app'
// eslint-disable-next-line import/no-named-as-default
import Head from 'next/head'
// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router'
// eslint-disable-next-line import/no-named-as-default
import NProgress from 'nprogress'
import GlobalStyles from 'styles/global'

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Devflix</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="og:image"
          content="https://devflix.johnywalves.com.br/img/thumbnail.png"
        />
        <meta
          name="description"
          content="Plataforma para compartilhamento de conhecimento sobre desenvolvimento de software em língua brasileira"
        />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
