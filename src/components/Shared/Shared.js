import "../../styles/reset.css";
import HeaderSpace from "../HeaderSpace";
import * as S from "../Folder/FolderStyled.js";
import FooterSpace from "../FooterSpace.js";
import Card from "../Card.js";
import SearchBar from "../Folder/SearchBar.js";
import Nav from "../Nav.js";
import { getFolderData, getUserData } from "../../api";
import { useState, useEffect } from "react";

function Shared() {
  const [items, setItems] = useState([]); //메인의 링크들 렌더링할 때
  const [profile, setProfile] = useState({}); // hero-header 부분 데이터
  const [user, setUser] = useState([]); // nav 우측 사용자정보

  const handleFolderLoad = async () => {
    // eslint-disable-line no-unused-vars
    try {
      const {
        folder: { links, name: title, owner },
      } = await getFolderData();

      setItems(links);
      setProfile({ title, ...owner });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRenderLinks = async () => {
    try {
      const {
        folder: { links },
      } = await getFolderData();

      setItems(links);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLoad = async () => {
    try {
      const {
        name,
        email: userEmail,
        profileImageSource: userImage,
      } = await getUserData();
      setUser({ name, userEmail, userImage });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchLinks = (items, value) => {
    if (value) {
      const searchingLink = items.filter((link) => {
        console.log(value);
        console.log("네이버".includes("ㄴ"));
        return (
          (link?.url?.toLowerCase().includes(value.toLowerCase()) ||
            link?.title?.toLowerCase().includes(value.toLowerCase()) ||
            link?.description?.toLowerCase().includes(value.toLowerCase())) ===
          true
        );
      });

      setItems(searchingLink);
    }
    if (value.length === 0) {
      handleRenderLinks();
    }
  };
  const initialize = async () => {
    await handleFolderLoad();
    await handleUserLoad();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <Nav lists={user} />
      <HeaderSpace profiles={profile} />
      <SearchBar items={items} onSearch={handleSearchLinks} />
      <S.Main>
        <S.Section>
          {items.map((card) => {
            return <Card item={card} key={card.id} />;
          })}
        </S.Section>
      </S.Main>
      <FooterSpace />
    </>
  );
}

export default Shared;
