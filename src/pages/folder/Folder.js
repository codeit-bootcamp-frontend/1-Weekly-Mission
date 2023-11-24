import "../../styles/reset.css";
import { LinkAddBar, FolderAdd } from "../../components/Add.js";
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
        console.log(value);
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
          if (it.isIntersecting) {
            setShow((prev) => !prev);
          } else {
            setShow((prev) => !prev);
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
      <LinkAddBar openMAF={openMAF} show={show} />
      <S.Target ref={targetRef} />
      <SearchBar items={userLinks} onSearch={handleSearchLinks} />
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

      {userLinks.length !== 0 ? (
        <S.Main>
          <S.Section>
            {userLinks.map((card) => {
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
      <S.Target ref={target2Ref} />
      <FooterSpace />
    </>
  );
}

export default Folder;
