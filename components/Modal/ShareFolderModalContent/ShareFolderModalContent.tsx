import { MouseEvent, ReactNode, useEffect } from "react";
import classNames from "classnames";

import styles from "./ShareFolderModalContent.module.css";

import { useFolderId } from "@/contexts/UserContext";
import { shareFacebook, shareKakao } from "@/utils/utils";
import ModalTitle from "@/components/Modal/ModalTitle/ModalTitle";
import kakaoIcon from "@/assets/images/kakao.svg";
import facebookIcon from "@/assets/images/facebook.svg";
import chainIcon from "@/assets/images/chain.svg";
import Image from "next/image";

interface Icon {
  name: string;
  icon: string;
  backgroundColor: string;
}

interface Props {
  children: ReactNode;
}

const icons: Icon[] = [
  { name: "카카오톡", icon: kakaoIcon, backgroundColor: "yellow" },
  { name: "페이스북", icon: facebookIcon, backgroundColor: "blue" },
  { name: "링크 복사", icon: chainIcon, backgroundColor: "gray" },
];

function ShareFolderModalContent({ children }: Props) {
  const folderId = useFolderId();

  const handleButtonClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const hostPath = window.location.origin;
    const route = `${hostPath}/shared/${folderId}`;

    if (e.currentTarget.querySelector("img")?.alt === "카카오톡") {
      shareKakao(route);
    }
    if (e.currentTarget.querySelector("img")?.alt === "페이스북") {
      shareFacebook(route);
    }
    if (e.currentTarget.querySelector("img")?.alt === "링크 복사") {
      try {
        await navigator.clipboard.writeText(route);
        alert("링크를 복사하였습니다.");
      } catch (error) {
        console.error("Failed to copy: ", error);
      }
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.shareFolderModal}>
      <ModalTitle>폴더 공유</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ul className={styles.buttonsWrapper}>
          {icons.map((icon, index) => {
            return (
              <li className={styles.buttonContainer} key={index}>
                <button
                  className={classNames(
                    styles.button,
                    styles[icon.backgroundColor]
                  )}
                  onClick={handleButtonClick}
                >
                  <Image src={icon.icon} alt={icon.name} />
                </button>
                <p className={styles.buttonName}>{icon.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShareFolderModalContent;
