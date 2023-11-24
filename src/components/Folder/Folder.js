import "../../styles/reset.css";
import LinkAddBar from "./linkAddBar.js";
import MainSpace from "../MainSpace";
import FooterSpace from "../FooterSpace";
import Nav from "../Nav";
import "../../styles/Folder.css";
import styled from "styled-components";

import { useState, useEffect, useRef } from "react";
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
  const [show, setShow] = useState(false);

  const targetRef = useRef(null);
  const target2Ref = useRef(null);

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
    const observer = new IntersectionObserver(
      (item) => {
        item.forEach((it) => {
          console.log(it);
          if (it.isIntersecting) {
            setShow(false);
          } else {
            setShow(true);
          }
        });
      },
      {
        threshold: 1.0,
      }
    );

    if (targetRef?.current) {
      observer.observe(targetRef.current);
    }

    if (target2Ref?.current) {
      observer.observe(target2Ref.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      if (target2Ref?.current) {
        observer.unobserve(target2Ref.current);
      }
    };
  }, []);

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
      <LinkAddBar openMAF={openMAF} show={show} />
      <Target ref={targetRef} />
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
      <Target ref={target2Ref} />
      <FooterSpace />
    </>
  );
}

export default Folder;

const Target = styled.div`
  width: 1px;
`;
