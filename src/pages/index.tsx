import Head from "next/head";
import Layout from "@components/Layout";
import axios from "axios";
import UserInfo from "@base/components/UserInfo";
import { changeAll } from "@base/store/changeDataSlice";
import { fetchSuc, fetchFail, setUserData, setActive } from "@base/store/userDataSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Home({}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActive("userInfo"))
    axios
      .post("/api/getData", { url: "https://www.jsonkeeper.com/b/6Z3L" })
      .then((r) => {
        dispatch(fetchSuc(r.data));
        dispatch(changeAll(r.data));
      })
      .catch((e) => dispatch(fetchFail(e.message)));
  });

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

      <Layout>
        <UserInfo />
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
