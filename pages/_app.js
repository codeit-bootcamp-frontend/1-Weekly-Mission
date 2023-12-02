import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getUsers } from "@/utils/api";
import Head from "next/head";
import { useEffect, useState } from "react";
import "styles/globals.css";
export default function App({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState(null);

  async function handleLoad() {
    const { data } = await getUsers("1");
    setUserInfo({ ...data[0] });
  }

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Nav userInfo={userInfo} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
