import "../../styles/reset.css";
import HeaderSpace from "../HeaderSpace";
import MainSpace from "../MainSpace";
import FooterSpace from "../FooterSpace";
import Nav from "../Nav";
import "../../styles/Folder.css";

import { useState, useEffect } from "react";
import { getSelectItems, getUserLogin, getRenderLinks } from "../../api";
import SelectPart from "./SelectPart";
import SearchBar from "./SearchBar";
import { ModalAddFolder } from "./Modal/Modal.js";

function Folder() {
  const [selectItems, setSelectItem] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  const [userLinks, setUserLinks] = useState([]);
  const [folderName, setFolderName] = useState([]);
  const [nowFolderId, setNowFolderId] = useState("");
  const [selected, setSelected] = useState("전체");
  const [openAddFolder, setOpenAddModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [url, setUrl] = useState("");

  const handleSelectItems = async () => {
    try {
      const { data } = await getSelectItems();
      setSelectItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLogin = async () => {
    //nav 상단 우측
    try {
      const { data } = await getUserLogin();
      const userInfo = data[0].email;
      const userMainId = userInfo.split("@")[0];
      setUserId(userMainId);
      const result = data[0];
      const { email: userEmail, image_source: userImage } = result;
      setUserLogin({ userEmail, userImage });
    } catch (error) {
      console.log(error);
    }
  };

  const initailize = async () => {
    await handleSelectItems();
    await handleUserLogin();
    await handleRenderItems();
  };

  const handleRenderItems = async () => {
    // 폴더이름 클릭시 해당하는 링크들 렌더링
    try {
      const { data } = await getRenderLinks(nowFolderId);

      if (!data) {
        return;
      }
      setUserLinks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickUpdate = (value, key) => {
    setSelected((prev) => !prev);
    setFolderName(value);
    setNowFolderId(key);
  };

  const handleSearchLinks = (items, value) => {
    if (value) {
      const searchingLink = items.filter((link) => {
        return (
          (link?.url?.toLowerCase().includes(value.toLowerCase()) ||
            link?.title?.toLowerCase().includes(value.toLowerCase()) ||
            link?.description?.toLowerCase().includes(value.toLowerCase())) ===
          true
        );
      });

      setUserLinks(searchingLink);
    }
    if (value === "") {
      handleRenderItems();
    }
  };

  const openMAF = (e, nowUrl) => {
    e.preventDefault();
    setOpenAddModal((prev) => !prev);
    setUrl(nowUrl);
  };
  const CloseMAF = (e) => {
    e.preventDefault();
    setOpenAddModal(false);
  };

  useEffect(() => {
    // 마운트 시 렌더링 되는 것들
    initailize();
  }, []);

  useEffect(() => {
    // 클릭 이후 업데이트
    handleRenderItems();
  }, [nowFolderId]);

  return (
    <>
      <Nav lists={userLogin} />
      <HeaderSpace openMAF={openMAF} />
      <SearchBar items={userLinks} onSearch={handleSearchLinks} />
      <SelectPart
        selectItems={selectItems}
        handleClickUpdate={handleClickUpdate}
        folderName={folderName}
        selected={selected}
        nowFolderId={nowFolderId}
        openMAF={openMAF}
        userId={userId}
      />
      {userLinks.length !== 0 ? (
        <MainSpace items={userLinks} openMAF={openMAF} />
      ) : (
        <div className="empty">저장된 링크가 없습니다</div>
      )}
      {openAddFolder ? (
        <ModalAddFolder
          selectItems={selectItems}
          CloseMAF={CloseMAF}
          url={url}
        />
      ) : null}
      <FooterSpace />
    </>
  );
}

// 먼저 멘토님의 피드백을 반영하였습니다. 이후
// 스타일드 컴포넌트를 활용하면  폴더버튼 컴포넌트를 따로 파일로 두지 않아도 될 것 같아서 selectItem.js를 삭제했고, 실제로 구현까지 완료하였습니다.
// 그리고  스타일드 컴포넌트에 간단하게 프롭스만 내려 조건부로 스타일링을 하면  state와 토글 함수 등을 안써도 될 것 같아서
// active state와 해당 이벤트 토글 함수 그리고 "전체"버튼 요소 클릭시 link-info가 display: none 되는 토글 함수 또한 삭제했고, 실제로 조건부 스타일링을 활용하여 구현까지 완료하였습니다.

// week9는 코드가 복잡하지만, 일단 구현은 다 했습니다. 최대한 state가 하위 컴포넌트들에 연쇄적으로 내려가지 않도록 만들고 싶었지만, 뜻 대로 완벽하게 되지는 않았습니다. 과제를 끝내고 생각해보니 컴포넌트 구조 상의 문제로 보입니다. 기존의 컴포넌트가 컴포넌트를 연이어 호출하는 방식이 아닌
// folder.js에서 모달들을 직접 호출하는 방식이 프롭 드릴을 조금이라도 막을 수 있어보이네요..

// 이 문제는 위 상황에만 국한되어 있지는 않다고 생각합니다. folder.js 혹은 가능한 상위의 컴포넌트에서  return 값으로 곧바로 폴더 및 링크 배열 등을 map 메서드로 렌더링 하는게 프롭을 계속해서 내리지 않는다는 점에서 좋아보입니다. 이에 대해 멘토님의 의견이 궁금합니다.

export default Folder;
