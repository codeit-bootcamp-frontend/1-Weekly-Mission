import "../../styles/reset.css";
import {
  LinkAddBar,
  FolderAdd,
  LinkAddBarFixedBot,
} from "../../components/Add.js";
import Card from "../../components/Card.js";
import FooterSpace from "../../components/FooterSpace.js";
import Nav from "../../components/Nav.js";

import * as S from "./FolderStyled.js";
import { useState, useEffect, useRef } from "react";
import { getSelectItems, getUserLogin, getRenderLinks } from "../../api.js";

import SearchBar from "../../components/SearchBar.js";
import TabButton from "../../components/TabButton.js";
import { ModalAddFolder } from "../../components/modal/Modal.js";
import LinkInfo from "../../components/LinkInfo.js";

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
  const [show, setShow] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [search, setSearch] = useState("");

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

  const openMAF = (e, nowUrl) => {
    e.preventDefault();
    setOpenAddModal((prev) => !prev);
    setUrl(nowUrl);
  };
  const CloseMAF = (e) => {
    e.preventDefault();
    setOpenAddModal(false);
  };

  const searchingLink = userLinks.filter((link) => {
    if (search.length > 0) {
      if (
        link?.url?.toLowerCase().includes(search.toLowerCase()) ||
        link?.title?.toLowerCase().includes(search.toLowerCase()) ||
        link?.description?.toLowerCase().includes(search.toLowerCase())
      ) {
        return userLinks;
      }
    } else {
      return userLinks;
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting && entry.target.className === "target") {
            setShow(true);
            console.log(entry);
          } else if (
            !entry.isIntersecting &&
            entry.target.className === "target"
          ) {
            setShow(false);
            console.log(entry);
          }

          if (entry.isIntersecting && entry.target.className === "target2") {
            setShowSecond(true);
          } else if (
            !entry.isIntersecting &&
            entry.target.className === "target2"
          ) {
            setShowSecond(false);
          }
        });
      },
      { threshold: 1.0 }
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
      <LinkAddBar openMAF={openMAF} />
      {!show && !showSecond ? <LinkAddBarFixedBot openMAF={openMAF} /> : null}

      <div ref={targetRef} className="target" />
      <SearchBar search={search} onSearch={setSearch} />
      <S.SelectPart>
        <S.TabButtonContainer>
          <TabButton
            selectItems={selectItems}
            nowFolderId={nowFolderId}
            handleClickUpdate={handleClickUpdate}
          />
          <FolderAdd openMAF={openMAF} />
        </S.TabButtonContainer>
        <LinkInfo
          folderName={folderName}
          nowFolderId={nowFolderId}
          userId={userId}
        />
      </S.SelectPart>

      {searchingLink.length !== 0 ? (
        <S.Main>
          <S.Section>
            {searchingLink.map((card) => {
              return <Card item={card} key={card.id} openMAF={openMAF} />;
            })}
          </S.Section>
        </S.Main>
      ) : (
        <S.Empty>저장된 링크가 없습니다</S.Empty>
      )}
      {openAddFolder ? (
        <ModalAddFolder
          selectItems={selectItems}
          CloseMAF={CloseMAF}
          url={url}
        />
      ) : null}
      <div ref={target2Ref} className="target2" />
      <FooterSpace />
    </>
  );
}

export default Folder;
