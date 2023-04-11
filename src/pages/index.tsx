import Head from "next/head";
import Header from "@base/components/Header";
import Layout from "@components/Layout";
import axios from "axios";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Base Project - Sample-IT</title>
        <meta
          name="description"
          content="A blank Tailwind template made by Sample-IT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </>
  );
}

/*
export async function getStaticProps() {
 return {

 }
}
*/
