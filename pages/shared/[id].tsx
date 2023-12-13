import React from "react";
import Nav from "@/pageComponents/sharedPageComponents/Nav";
import Header from "@/pageComponents/sharedPageComponents/Header";
import Article from "@/components/Article";
import Footer from "@/components/Footer";
import axios from "@/libs/axios";
import Head from "next/head";
import { GetStaticPropsContext } from "next";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const folderId = context?.params["id"];

  const result = await axios.get(`/folders/${folderId}`);

  let folderName, user_id;
  if (result?.data?.data[0]) {
    ({ name: folderName, user_id } = result?.data?.data[0]);
  } else {
    folderName = "존재하지 않는 폴더입니다.";
    user_id = undefined;
  }

  let userName, profile, userEmail;
  try {
    const result = await axios.get(`/users/${user_id}`);
    if (result?.data?.data[0]) {
      const { name, image_source, email } = result.data.data[0];
      userName = name;
      profile = image_source;
      userEmail = email;
    } else {
      userName = "";
      profile = "";
      userEmail = "";
    }
  } catch (error) {
    userName = "";
    profile = "";
    userEmail = "";
  }

  let fullData;
  try {
    const result = await axios.get(
      `/users/${user_id}/links?folderId=${folderId}`
    );
    if (result?.data?.data[0]) {
      fullData = result?.data?.data;
    } else {
      fullData = [];
    }
  } catch (error) {
    fullData = [];
  }

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
}: SharedPageProps) {
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
