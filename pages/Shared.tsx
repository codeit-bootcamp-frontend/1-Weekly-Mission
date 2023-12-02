import { useState, useEffect } from "react";

import HeaderSpace from "../components/HeaderSpace";
import FooterSpace from "../components/FooterSpace";
import { SampleCard } from "../components/Card";
import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav";
import * as S from "../styles/FolderStyled";

import { getFolderData, getUserData } from "../api";
import { SampleLinkData } from "../type";

function Shared() {
  const [items, setItems] = useState([]); //메인의 링크들 렌더링할 때
  const [profile, setProfile] = useState({}); // hero-header 부분 데이터
  const [user, setUser] = useState({}); // nav 우측 사용자정보
  const [search, setSearch] = useState("");

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

  const searchingLink = items.filter((item: SampleLinkData) => {
    if (search.length > 0) {
      if (
        item?.url?.toLowerCase().includes(search.toLowerCase()) ||
        item?.title?.toLowerCase().includes(search.toLowerCase()) ||
        item?.description?.toLowerCase().includes(search.toLowerCase())
      ) {
        return items;
      }
    } else {
      return items;
    }
  });

  const initialize = async () => {
    await handleFolderLoad();
    await handleUserLoad();
    await handleRenderLinks();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <>
      <Nav lists={user} />
      <HeaderSpace profiles={profile} />
      <SearchBar search={search} onSearch={setSearch} />
      <S.Main>
        <S.Section>
          {searchingLink.map((card: SampleLinkData) => {
            return <SampleCard item={card} key={card.id} />;
          })}
        </S.Section>
      </S.Main>
      <FooterSpace />
    </>
  );
}

export default Shared;
