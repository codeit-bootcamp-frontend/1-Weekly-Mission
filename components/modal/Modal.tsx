import React, { useCallback, useState } from "react";
import styles from "./Modal.module.css";
import kakaochat from "@/public/images/Chat.png";
import facebook from "@/public/images/Telegram.png";
import link from "@/public/images/More.png";
import Image from "next/image";
import useKakao from "@/hooks/useKaKao";
import useCopyClipBoard from "@/hooks/useCopyClipboard";
import { KAKAO_SHARE_DATA } from "@/utils/constant";
import { useRouter } from "next/router";

export default function Modal({
  setterFunc,
  tabName,
  folderName,
  linkUrl = "",
}) {
  const obj = {
    share: ["폴더공유"],
    change: ["폴더이름변경", "변경하기", "blue"],
    delete: ["폴더삭제", "삭제하기", "red"],
    deleteLink: ["링크삭제", "삭제하기", "red"],
  };

  const [title, buttonName, buttonColor] = obj[tabName];

  const router = useRouter();
  const { id } = router.query;

  const shareLink = `${window.location.origin}/folder/${id}`;

  const shareKaKao = useKakao();

  const onClickKaKao = () => {
    shareKaKao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };
  const onClickFaceBook = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);

  const [copyToClipboard, copyResult] = useCopyClipBoard();

  const onClickLinkCopy = useCallback(() => {
    copyToClipboard(shareLink);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal__container}>
        <button
          className={styles.cancel__button}
          onClick={() => {
            setterFunc(false);
          }}
        >
          X
        </button>

        <p className={styles.title}>{title}</p>
        {/* except for change button */}
        {tabName !== "change" && <p className={styles.folder}>{folderName}</p>}
        {/* only for change button */}
        {tabName === "change" && (
          <input className={styles.input} placeholder="내용입력" />
        )}

        {tabName === "deleteLink" && <p>{linkUrl}</p>}
        {buttonName ? (
          buttonColor === "blue" ? (
            <button className={styles.button}>{buttonName}</button>
          ) : (
            <button className={styles.button__red}>{buttonName}</button>
          )
        ) : (
          <div className={styles.share__container}>
            <div onClick={onClickKaKao}>
              <Image src={kakaochat} alt="kakao" width={40} height={50} />
            </div>
            <div onClick={onClickFaceBook}>
              <Image src={facebook} alt="kakao" width={40} height={50} />
            </div>
            <div onClick={onClickLinkCopy}>
              <Image src={link} alt="kakao" width={40} height={50} />
            </div>
            {copyResult?.state && copyResult?.message}
            {!copyResult?.state && copyResult?.message}
          </div>
        )}
      </div>
    </div>
  );
}
