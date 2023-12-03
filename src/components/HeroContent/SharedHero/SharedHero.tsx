import style from "./SharedHero.module.css";
import { useEffect, useState } from "react";
import requestData from "../../../services/api";
import noUserImg from "/public/image/icon-myprofile.svg";
import { IFolderInfoData } from "../types/Hero.types";
import Image from "next/image";

function SharedHero() {
  const [folderInfoData, setFolderInfoData] = useState<
    IFolderInfoData | undefined
  >();

  async function getFolderInfoResponse() {
    const { folder } = await requestData(null, "sample/folder", "GET");
    const { name: folderName, owner } = await folder;
    const { name: userName, profileImageSource: userImg } = await owner;
    setFolderInfoData({ folderName, userName, userImg });
  }

  useEffect(() => {
    getFolderInfoResponse();
  }, []);

  return (
    <section className={style.hero__shared}>
      <div className={style.folder_container}>
        <Image
          className={style.folder_image}
          width={70}
          height={70}
          alt="folder icon"
          src={folderInfoData?.userImg ? folderInfoData.userImg : noUserImg}
        />
        <h4 className={style.folder_userName}>{folderInfoData?.userName}</h4>
      </div>
      <div
        className={style.folder_folderName}
        // style="width: 800px; position: relative"
      >
        {folderInfoData?.folderName}
      </div>
    </section>
  );
}
export default SharedHero;
