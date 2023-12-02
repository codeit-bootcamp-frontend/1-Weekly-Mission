import React from "react";
import Nav from "@/ui/Nav";
import Header from "@/ui/Header";
import Article from "@/ui/Article";
import Footer from "@/ui/Footer";
import axios from "@/api/axios";
import Head from "next/head";

interface PropsType {
  userEmail: string;
  profile: string;
  userName: string;
  folderName: string;
  fullData: Link[];
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

interface Temp {
  folder: Folder;
}

export async function getStaticProps() {
  const res = await axios.get(`/sample/user`);
  const userEmail: string = res?.data?.email;
  const res2 = await axios.get(`/sample/folder`);
  const temp: Temp = res2.data;
  const profile: string = temp?.folder?.owner?.profileImageSource;
  const userName: string = temp?.folder?.owner?.name;
  const folderName: string = temp?.folder?.name;
  const fullData: Link[] = temp?.folder?.links;

  return {
    props: {
      userEmail,
      profile,
      userName,
      folderName,
      fullData,
    },
  };
}

export default function SharedPage({
  userEmail,
  profile,
  userName,
  folderName,
  fullData,
}: PropsType) {
  return (
    <>
      <Head>
        <title>공유 페이지</title>
      </Head>
      <Nav userEmail={userEmail} />
      <Header
        profile={profile}
        userName={userName}
        folderName={folderName}
        fullData={fullData}
      />
      <Article />
      <Footer />
    </>
  );
}
