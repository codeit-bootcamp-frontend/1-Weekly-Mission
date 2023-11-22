import React, { useEffect, useRef, useState } from "react";
import addImg from "../img/svg/add.svg";
import shareImg from "../img/svg/share.svg";
import penImg from "../img/svg/pen.svg";
import deleteImg from "../img/svg/delete.svg";
import { NavLink } from "react-router-dom";

const activeStyle = {
  backgroundColor: "#6d6afe",
  color: "#ffffff",
};

const all = {
  id: 9999,
  name: "전체",
  user_id: 1,
};

const UserFolder = ({ folderDataObject, folderId = 9999, handleListClick }) => {
  const [titleName, setTitleName] = useState("");
  const titleRef = useRef({});
  const { current } = titleRef;
  const folderOption = [
    { title: "공유", image: shareImg, name: "폴더 공유", btn: "" },
    {
      title: "이름변경",
      image: penImg,
      name: "폴더 이름 변경",
      btn: "변경하기",
    },
    { title: "삭제", image: deleteImg, name: "폴더 삭제", btn: "삭제하기" },
  ];

  useEffect(() => {
    setTitleName(current[folderId]?.innerText);
  }, [folderDataObject, folderId]);

  if (!folderDataObject) return;
  const { data: folderData } = folderDataObject;
  const newFolderData = [all, ...folderData];

  return (
    <div className="user-folder">
      <div className="folder-lists">
        <ul>
          {newFolderData?.map((folder) => {
            return (
              <li
                key={folder.id}
                ref={(element) => (titleRef.current[folder.id] = element)}
              >
                <NavLink
                  to={
                    folder.name !== "전체" ? `/folder/${folder.id}` : `/folder`
                  }
                  end
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  {folder.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <h4
          onClick={(event) => handleListClick(event, "폴더 추가", "추가하기")}
        >
          <span>폴더 추가</span>
          <img src={addImg} alt="추가이미지" />
        </h4>
      </div>
      <div className="select-folder">
        <h2>{titleName && titleName}</h2>
        {titleName && titleName !== "전체" ? (
          <ul>
            {folderOption.map((option, index) => {
              return (
                <li
                  key={index}
                  onClick={(event) =>
                    handleListClick(event, option.name, option.btn, titleName)
                  }
                >
                  <img src={option.image} alt={`${option.title}이미지`} />
                  <span>{option.title}</span>
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
