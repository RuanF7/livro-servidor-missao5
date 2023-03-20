import 'bootstrap/dist/css/bootstrap.css';
import '../pages/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'


 function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <meta name='viewport'
        content='width=device-width, inicial-scale=1'/>
    </Head>

    <Component {...pageProps} />
  </>
  )
}

export default MyApp