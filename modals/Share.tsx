import styles from "./Share.module.css";
import ModalHeader from "./ModalHeader/ModalHeader";
import { ReactNode, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

interface Props {
  children: ReactNode;
  folderId: string | string[] | undefined;
}

function Share({ children, folderId }: Props) {
  const url = "http://localhost:3000";

  const { Kakao }: any = window;

  useEffect(() => {
    Kakao.init("dfa81690fbc58d64ad3c328ec8bd78a5");

    return () => Kakao.cleanup();
  }, [Kakao]);

  const shareKakao = () => {
    Kakao.Link.sendCustom({
      templateId: 101471,
      templateArgs: {
        folderId,
        message: `${children} 폴더를 공유해드립니다 :)`,
      },
    });
  };

  const shareItems = [
    {
      img: "/images/icon/social-icons/share_kakao.png",
      sub: "카카오톡",
      onClick: shareKakao,
    },
    {
      img: "/images/icon/social-icons/share_facebook.png",
      sub: "페이스북",
      onClick: () => {
        window.open(`http://www.facebook.com/sharer.php?u=${url}/shared/${folderId}`);
      },
    },
    {
      img: "/images/icon/social-icons/share_link.png",
      sub: "링크 복사",
      onClick: () => {
        navigator.clipboard.writeText(`${url}/shared/${folderId}`);
      },
    },
  ];

  return (
    <>
      <ModalHeader title="공유하기" subTitle={children}></ModalHeader>
      <div className={styles.body}>
        {shareItems.map((item) => {
          return (
            <div className={styles.link} key={item.sub}>
              <button onClick={item.onClick}>
                <Image width={42} height={42} src={item.img} alt="" />
              </button>
              <p>{item.sub}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Share;
