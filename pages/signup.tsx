import SignForm from "@/components/signInput/SignForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary | Sign In</title>
      </Head>
      <SignForm signup />
    </>
  );
}
