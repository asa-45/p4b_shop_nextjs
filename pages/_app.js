import '../styles/globals.css';
import Image from 'next/dist/client/image';
import logoPng from "../public/logo.jpg";

import Layout from '../components/Layout'

const MyApp =({ Component, pageProps })=>{
  return (
    <Layout>
      <Component {...pageProps} />
      <Image
        src={logoPng}
        width={500}
        height={500}
        placeholder="blur"
      />
    </Layout>
  )
}

export default MyApp
