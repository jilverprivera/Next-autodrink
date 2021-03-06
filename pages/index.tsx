import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../layout";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Autodrink</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Banner />
        <div className="w-full min-h-screen relative"></div>
      </Layout>
    </>
  );
};

export default Home;
