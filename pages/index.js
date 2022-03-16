import Heading from "../components/Heading";
import Head from "next/head";

const Home = ()=>{

  return(
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <Heading text="Hello world!" />    
    </>
  )
}



export default Home;
