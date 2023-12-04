import React, { useEffect, useRef, useState } from "react";
import addImg from "@/public/img/svg/add.svg";
import shareImg from "@/public/img/svg/share.svg";
import penImg from "@/public/img/svg/pen.svg";
import deleteImg from "@/public/img/svg/delete.svg";
import { folders } from "@/dataType/dataType";
import Image from "next/image";
import styles from "./userFolder.module.css";

interface UserFolderType {
  folderDataObject: { data: folders[] };
  folderId: string | null;
  handleListClick: (
    event: React.MouseEvent<HTMLLIElement | HTMLHeadingElement>,
    title: string,
    btn: string,
    item?: string
  ) => void;
  setFolderId: React.Dispatch<React.SetStateAction<null>>;
}

type NavLinkType = {
  to: any;
  children: React.ReactChild;
  folderId: any;
};

const activeStyle = {
  backgroundColor: "#6d6afe",
  color: "#ffffff",
};

const all = {
  id: 9999,
  name: "전체",
  user_id: 1,
};

const folderOption = [
  {
    title: "공유",
    image: shareImg,
    name: "폴더 공유",
    btn: "",
  },
  {
    title: "이름변경",
    image: penImg,
    name: "폴더 이름 변경",
    btn: "변경하기",
  },
  {
    title: "삭제",
    image: deleteImg,
    name: "폴더 삭제",
    btn: "삭제하기",
  },
];

/* 폴더리스트 선택 스타일 */
function NavLink({ to, children, folderId }: NavLinkType) {
  const isActive = folderId === to;
  const isAll = folderId === null && to === 9999;

  return (
    <div
      className={styles.folderName}
      style={isActive || isAll ? activeStyle : {}}
    >
      {children}
    </div>
  );
}

const UserFolder = ({
  folderDataObject,
  folderId,
  handleListClick,
  setFolderId,
}: UserFolderType) => {
  const [titleName, setTitleName] = useState("");
  const titleRef = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const { current } = titleRef;

  useEffect(() => {
    folderId = folderId ? folderId : "9999";
    setTitleName(current[folderId]!.innerText);
  }, [folderDataObject, folderId]);

  if (!folderDataObject) return;

  const { data: folderData } = folderDataObject;
  const newFolderData = [all, ...folderData];

  const onClick = (id: any) => {
    setFolderId(id !== 9999 ? id : null);
  };

  return (
    <div className={styles.userFolder}>
      <div className={styles.folderLists}>
        <ul className={styles.folderListsUl}>
          {newFolderData.map((folder) => {
            return (
              <li
                className={styles.folderListsUlLi}
                key={folder.id}
                ref={(element) => (titleRef.current[folder.id] = element)}
                onClick={() => onClick(folder.id)}
              >
                <NavLink to={folder.id} folderId={folderId}>
                  {folder.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <h4
          className={styles.folderListsH4}
          onClick={(event) => handleListClick(event, "폴더 추가", "추가하기")}
        >
          <span className={styles.folderListsH4Span}>폴더 추가</span>
          <Image
            className={styles.folderListsH4Img}
            width={16}
            height={17}
            src={addImg}
            alt="추가이미지"
          />
        </h4>
      </div>
      <div className={styles.selectFolder}>
        <h2 className={styles.selectFolderH2}>{titleName && titleName}</h2>
        {titleName && titleName !== "전체" ? (
          <ul className={styles.selectFolderUl}>
            {folderOption.map((option, index) => {
              return (
                <li
                  className={styles.selectFolderUlLi}
                  key={index}
                  onClick={(event) =>
                    handleListClick(event, option.name, option.btn, titleName)
                  }
                >
                  <Image
                    className={styles.selectFolderUlLiImg}
                    width={18}
                    height={19}
                    src={option.image}
                    alt={`${option.title}이미지`}
                  />
                  <span className={styles.selectFolderUlLiSpan}>
                    {option.title}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default UserFolder;
