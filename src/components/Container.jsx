import "../pages/SharedPage/sharedPage.css";
import HeroContent from "./HeroContent";
import Header from "./Header";
import MainContent from "./MainContent";
import React, { useContext } from "react";
import requestData from "../services/api";

async function getFolderInfoResponse() {
  const responseFolderData = await requestData(null, "sample/folder", "GET");
  const { folder: folderInfo } = responseFolderData;
  console.log({ responseFolderData });

  return { folderInfo };
}

function Container() {
  // async function getFolderInfo() {
  //   const {
  //     folderProfile,
  //     folderName,
  //     userName,
  //     folderImgSrc,
  //     userEmail,
  //     userImg,
  //   } = await getFolderInfoResponse();
  //   return { folderProfile, folderName };
  // }

  // const { folderProfile, folderName } = getFolderInfo();
  // console.log({ folderProfile });

  const responseData = useContext(getFolderInfoResponse);

  const styles = {
    width: "16px",
    height: "16px",
  };

  return (
    <>
      <Header />
      <section className="main-content">
        <HeroContent />
        <MainContent />
      </section>
    </>
  );
}

export default Container;
