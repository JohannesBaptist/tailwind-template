import Head from "next/head";
import Header from "@base/components/Header";
import Layout from "@components/Layout";
import axios from "axios";
import SideMenu from "@base/components/SideMenu";
import Panel from "@base/components/Panel";
import { changeAll } from "@base/store/changeDataSlice";
import { fetchSuc, fetchFail, setUserData } from "@base/store/userDataSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Home({}) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("/api/getData", { url: "https://www.jsonkeeper.com/b/6Z3L" })
      .then((r) => {
        dispatch(fetchSuc(r.data));
        dispatch(changeAll(r.data));
      })
      .catch((e) => dispatch(fetchFail(e.message)));
  }, []);

  return (
    <>
      <Head>
        <title>Technical Exam - Maddox AI </title>
        <meta
          name="description"
          content="A blank Tailwind template made by Sample-IT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen dark:bg-black flex flex-col">
        <Header />
        <div className="flex-grow flex ">
          <SideMenu />
          <Panel />
        </div>
      </main>
    </>
  );
}

/*
export async function getStaticProps() {
 return {

 }
}
*/
