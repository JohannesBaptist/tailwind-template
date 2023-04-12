import Head from "next/head";
import Header from "@base/components/Header";
import Layout from "@components/Layout";
import axios from "axios";
import ToDoList from "@base/components/ToDoList";
import { changeAll } from "@base/store/changeDataSlice";
import { fetchSuc, fetchFail, setUserData, setActive } from "@base/store/userDataSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const active = "ToDoList"

export default function Home({}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActive("activities"))
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
        <title>To-Do-List - Acitve Tasks </title>
        <meta
          name="description"
          content="A blank Tailwind template made by Sample-IT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout active={active}>
        <ToDoList />
      </Layout>
    </>
  );
}

/*
export async function getStaticProps() {
 return {

 }
}
*/
