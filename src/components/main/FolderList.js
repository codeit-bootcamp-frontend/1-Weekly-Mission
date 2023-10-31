import { useState, useEffect, useCallback } from "react";
import { getResponse } from "../../api";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import addPurpleImg from "../../image/add.svg";
import addWhiteImg from "../../image/addWhite.svg";
import shareImg from "../../image/share.svg";
import penImg from "../../image/pen.svg";
import deleteImg from "../../image/delete.svg";

const FolderList = ({ onFolderSelect }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const [addImg, setAddImg] = useState(addPurpleImg);

  const handleLoad = useCallback(async () => {
    const result = await getResponse("folder", "folders");
    if (!result) {
      return;
    }

    const { data } = result;

    setFolders(data);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setAddImg(addWhiteImg);
    } else {
      setAddImg(addPurpleImg);
    }
  };

  useEffect(() => {
    handleLoad();
    handleResize();

    // 윈도우의 resize 이벤트에 handleResize 함수를 추가하여 화면 크기가 변경될 때마다 실행되도록 함
    window.addEventListener("resize", handleResize);

    // // 컴포넌트가 사라질 때 resize 이벤트 핸들러를 제거하여 메모리 누수를 방지
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const handleClick = (folderId, folderName) => {
    if (folderId) {
      setSelectedFolder(folderName);
      onFolderSelect(folderId);
    } else {
      setSelectedFolder("전체");
      onFolderSelect(null, true);
    }
  };

  return (
    <>
      <div className="folder_wrapper">
        {/* 버튼 누르는 부분 */}
        <div className="folder_buttons">
          <Link
            className={`folder_item ${
              selectedFolder === "전체" ? "selected" : ""
            }`}
            to={"/folder"}
            onClick={() => handleClick(null)}
          >
            <div>전체</div>
          </Link>
          {folders.map((folder) => {
            return (
              <Fragment key={folder.id}>
                <Link
                  className={`folder_item ${
                    selectedFolder === folder.name ? "selected" : ""
                  }`}
                  to={`?folderId=${folder.id}`}
                  onClick={() => handleClick(folder.id, folder.name)}
                >
                  <div>{folder.name}</div>
                </Link>
              </Fragment>
            );
          })}
        </div>
        {/* 폴더 추가 */}
        <button className="add_folder">
          <span className="add_folder_msg">폴더 추가</span>
          <img className="add_folder_img" src={addImg} />
        </button>
      </div>

      <div className="folder_wrapper">
        {/* 제목 부분 */}
        <div className="folder_title">{selectedFolder}</div>
        {/* 추가 버튼 부분 */}
        {selectedFolder !== "전체" && (
          <div className="function_buttons">
            <button className="function_button">
              <img className="function_button_img" src={shareImg} />
              <span className="function_button_msg">공유</span>
            </button>
            <button className="function_button">
              <img className="function_button_img" src={penImg} />
              <span className="function_button_msg">이름 변경</span>
            </button>
            <button className="function_button">
              <img className="function_button_img" src={deleteImg} />
              <span className="function_button_msg">삭제</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FolderList;
